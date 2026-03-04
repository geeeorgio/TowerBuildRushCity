import type { Building, Skin } from './gameplay';

export type PersistContextType = {
  isContextLoading: boolean;
  //
  buildingsContextList: Building[];
  openedContextBuildings: string[];
  setOpenedContextBuildings: (value: string) => void;
  //
  collectedContextSkins: string[];
  setCollectedContextSkins: (value: string) => void;
  skinsContextList: Skin[];
  //
  bricksContextCount: number;
  incrementBricksContextCount: (value: number) => void;
  decrementBricksContextCount: (value: number) => void;
};

export type OnboardingContextType = {
  isContextLoading: boolean;
  //
  isContextOnboardingDone: boolean;
  setIsContextOnboardingDone: (value: boolean) => void;
};
