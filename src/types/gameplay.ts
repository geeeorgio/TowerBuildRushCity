import type { ImageSourcePropType } from 'react-native';

export type Building = {
  id: string;
  image: ImageSourcePropType;
  isOpen: boolean;
  price: number;
};

export type Skin = {
  id: string;
  image: ImageSourcePropType;
  isOpen: boolean;
};
