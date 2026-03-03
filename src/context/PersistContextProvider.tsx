import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { PersistContextType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const PersistContext = createContext<PersistContextType | null>(null);

export const PersistContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [openedBuildings, setOpenedBuildings] = useState<string[]>([]);
  const [collectedSkins, setCollectedSkins] = useState<string[]>([]);
  const [bricksCount, setBricksCount] = useState<number>(0);

  useEffect(() => {
    const init = async () => {
      const [savedBuildings, savedSkins, savedCount] = await Promise.all([
        getItemFromStorage<string[]>('opened_buildings'),
        getItemFromStorage<string[]>('collected_skins'),
        getItemFromStorage<number>('bricks_count'),
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

      setIsLoading(false);
    };

    init();
  }, []);

  const setOpenedContextBuildings = useCallback((buildingId: string) => {
    setOpenedBuildings((prev) => {
      if (prev.includes(buildingId)) return prev;

      const newState = [...prev, buildingId];

      setItemInStorage('opened_buildings', newState);

      return newState;
    });
  }, []);

  const setCollectedContextSkins = useCallback((skinId: string) => {
    setCollectedSkins((prev) => {
      if (prev.includes(skinId)) return prev;

      const newState = [...prev, skinId];

      setItemInStorage('collected_skins', newState);
      return newState;
    });
  }, []);

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

  const value = useMemo(
    () => ({
      isContextLoading: isLoading,
      openedContextBuildings: openedBuildings,
      collectedContextSkins: collectedSkins,
      bricksContextCount: bricksCount,
      setOpenedContextBuildings,
      setCollectedContextSkins,
      incrementBricksContextCount,
      decrementBricksContextCount,
    }),
    [
      isLoading,
      openedBuildings,
      collectedSkins,
      bricksCount,
      setOpenedContextBuildings,
      setCollectedContextSkins,
      incrementBricksContextCount,
      decrementBricksContextCount,
    ],
  );

  return (
    <PersistContext.Provider value={value}>{children}</PersistContext.Provider>
  );
};
