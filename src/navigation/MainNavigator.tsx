import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
          title: 'My city',
        }}
      />
      <MainStack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          title: 'Mini game',
        }}
      />
      <MainStack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{
          title: 'Quiz',
        }}
      />
      <MainStack.Screen
        name="CollectionScreen"
        component={CollectionScreen}
        options={{
          title: 'Collection',
        }}
      />
      <MainStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          animation: 'slide_from_bottom',
          title: 'About',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
