import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MENU_ITEMS } from 'src/constants';
import {
  AboutScreen,
  CityScreen,
  CollectionScreen,
  GameScreen,
  HomeScreen,
  QuizScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        animation: 'slide_from_right',
        gestureEnabled: false,
      }}
    >
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen
        name="CityScreen"
        component={CityScreen}
        options={{
          title: MENU_ITEMS.find((item) => item.name === 'CityScreen')?.title,
        }}
      />
      <MainStack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          title: MENU_ITEMS.find((item) => item.name === 'GameScreen')?.title,
        }}
      />
      <MainStack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{
          title: MENU_ITEMS.find((item) => item.name === 'QuizScreen')?.title,
        }}
      />
      <MainStack.Screen
        name="CollectionScreen"
        component={CollectionScreen}
        options={{
          title: MENU_ITEMS.find((item) => item.name === 'CollectionScreen')
            ?.title,
        }}
      />
      <MainStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          animation: 'slide_from_bottom',
          title: MENU_ITEMS.find((item) => item.name === 'AboutScreen')?.title,
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
