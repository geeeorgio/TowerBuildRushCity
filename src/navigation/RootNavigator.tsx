import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { useOnboardingContext, usePersistContext } from 'src/hooks';
import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isContextLoading: onboardingLoading, isContextOnboardingDone } =
    useOnboardingContext();
  const { isContextLoading: mainLoading } = usePersistContext();

  if (onboardingLoading || mainLoading) {
    return null;
  }

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        animation: 'fade',
        gestureEnabled: false,
      }}
    >
      {isContextOnboardingDone ? (
        <RootStack.Screen name="MainStack" component={MainNavigator} />
      ) : (
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
