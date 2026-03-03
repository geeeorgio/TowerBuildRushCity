import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  HomeScreen: undefined;
  CityScreen: undefined;
  GameScreen: undefined;
  QuizScreen: undefined;
  CollectionScreen: undefined;
  AboutScreen: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;
