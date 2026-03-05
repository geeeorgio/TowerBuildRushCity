import { Text, View } from 'react-native';

import { styles } from './styles';

import type { GamePlayType } from 'src/types';

interface GameResultProps {
  resultInfo: GamePlayType;
}

const GameResult = ({ resultInfo }: GameResultProps) => {
  return (
    <View style={styles.container}>
      <Text>GameResult</Text>
    </View>
  );
};

export default GameResult;
