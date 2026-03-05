import type { ImageSourcePropType } from 'react-native';

export type Building = {
  id: string;
  image: ImageSourcePropType;
  isOpen: boolean;
  isBuilding: boolean;
  price: number;
  timeToBuild: number;
};

export type Skin = {
  id: string;
  image: ImageSourcePropType;
  isOpen: boolean;
};

export type BuildingTimestamp = {
  id: string;
  timestamp: number;
  totalDuration: number;
};

export type GameStatusType = 'intro' | 'setup' | 'game' | 'result';

export type RoundInfoType = {
  roundNumber: number;
  buildingsList: string[];
  pickedBuildings: string[];
};

export type GamePlayType = {
  setupTime: number;
  currentRound: number;
  totalRounds: number;
  roundDuration: number;
  roundInfo: RoundInfoType[];
};
