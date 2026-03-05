import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { BUILDINGS_LIST, SKINS_LIST } from 'src/constants';
import type { BuildingTimestamp, PersistContextType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const PersistContext = createContext<PersistContextType | null>(null);

export const PersistContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [openedBuildings, setOpenedBuildings] = useState<string[]>([
    'bd_1_default',
  ]);
  const [collectedSkins, setCollectedSkins] = useState<string[]>([]);
  const [bricksCount, setBricksCount] = useState<number>(500);
  const [buildingTimestamp, setBuildingTimestamp] =
    useState<BuildingTimestamp | null>(null);

  useEffect(() => {
    const init = async () => {
      const [savedBuildings, savedSkins, savedCount, savedBuildingTimestamp] =
        await Promise.all([
          getItemFromStorage<string[]>('opened_buildings'),
          getItemFromStorage<string[]>('collected_skins'),
          getItemFromStorage<number>('bricks_count'),
          getItemFromStorage<BuildingTimestamp>('building_timestamps'),
        ]);

      if (savedBuildings && Array.isArray(savedBuildings)) {
        setOpenedBuildings(savedBuildings);
      }
      if (savedSkins && Array.isArray(savedSkins)) {
        setCollectedSkins(savedSkins);
      }
      if (typeof savedCount === 'number' && savedCount >= 0) {
        setBricksCount(savedCount);
      }
      if (
        savedBuildingTimestamp !== null &&
        'id' in savedBuildingTimestamp &&
        'timestamp' in savedBuildingTimestamp
      ) {
        setBuildingTimestamp(savedBuildingTimestamp);
      }

      setIsLoading(false);
    };

    init();
  }, []);

  const savedBuildings = useMemo(() => {
    const list = BUILDINGS_LIST.map((building) => {
      return {
        ...building,
        isOpen: openedBuildings.includes(building.id),
        isBuilding: buildingTimestamp?.id === building.id,
      };
    });

    return list;
  }, [openedBuildings, buildingTimestamp]);

  const setOpenedContextBuildings = useCallback((buildingId: string) => {
    setOpenedBuildings((prev) => {
      if (prev.includes(buildingId)) return prev;

      const newState = [...prev, buildingId];

      setItemInStorage('opened_buildings', newState);

      return newState;
    });
  }, []);

  const setIsBuildingContext = useCallback(
    (buildingId: string) => {
      const building = savedBuildings.find((b) => b.id === buildingId);
      if (!building) return;

      const newTimestamp = {
        id: buildingId,
        timestamp: Date.now() + building.timeToBuild,
        totalDuration: building.timeToBuild,
      };

      setBuildingTimestamp(newTimestamp);
      setItemInStorage('building_timestamps', newTimestamp);
    },
    [savedBuildings],
  );

  const setCollectedContextSkins = useCallback((skinId: string) => {
    setCollectedSkins((prev) => {
      if (prev.includes(skinId)) return prev;

      const newState = [...prev, skinId];

      setItemInStorage('collected_skins', newState);
      return newState;
    });
  }, []);

  const savedSkins = useMemo(() => {
    const list = SKINS_LIST.map((skin) => {
      return {
        ...skin,
        isOpen: collectedSkins.includes(skin.id),
      };
    });

    return list;
  }, [collectedSkins]);

  const incrementBricksContextCount = useCallback((value: number) => {
    if (value < 0) return;

    setBricksCount((prev) => {
      const newState = prev + value;

      setItemInStorage('bricks_count', newState);

      return newState;
    });
  }, []);

  const decrementBricksContextCount = useCallback((value: number) => {
    if (value < 0) return;

    setBricksCount((prev) => {
      const newState = Math.max(0, prev - value);

      setItemInStorage('bricks_count', newState);

      return newState;
    });
  }, []);

  useEffect(() => {
    if (!buildingTimestamp) return;

    const remaining = buildingTimestamp.timestamp - Date.now();

    if (remaining <= 0) {
      setOpenedContextBuildings(buildingTimestamp.id);
      setBuildingTimestamp(null);
      setItemInStorage('building_timestamps', null);
      return;
    }

    const timer = setTimeout(() => {
      setOpenedContextBuildings(buildingTimestamp.id);
      setBuildingTimestamp(null);
      setItemInStorage('building_timestamps', null);
    }, remaining);

    return () => clearTimeout(timer);
  }, [buildingTimestamp, setOpenedContextBuildings]);

  const value = useMemo(
    () => ({
      isContextLoading: isLoading,
      buildingsContextList: savedBuildings,
      openedContextBuildings: openedBuildings,
      collectedContextSkins: collectedSkins,
      skinsContextList: savedSkins,
      bricksContextCount: bricksCount,
      buildingTimestamp,
      setOpenedContextBuildings,
      setIsBuildingContext,
      setCollectedContextSkins,
      incrementBricksContextCount,
      decrementBricksContextCount,
    }),
    [
      isLoading,
      openedBuildings,
      collectedSkins,
      bricksCount,
      savedBuildings,
      savedSkins,
      buildingTimestamp,
      setOpenedContextBuildings,
      setIsBuildingContext,
      setCollectedContextSkins,
      incrementBricksContextCount,
      decrementBricksContextCount,
    ],
  );

  return (
    <PersistContext.Provider value={value}>{children}</PersistContext.Provider>
  );
};
