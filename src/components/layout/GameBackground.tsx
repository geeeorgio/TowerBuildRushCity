import type { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MAIN_BACKGROUND } from 'src/constants';

interface GameBackgroundProps {
  children: ReactNode;
}

const GameBackground = ({ children }: GameBackgroundProps) => {
  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      resizeMode="cover"
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default GameBackground;

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  safeArea: {
    flex: 1,
  },
});
