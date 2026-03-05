import { Text, View } from 'react-native';

import { styles } from './styles';

interface GamePlayProps {
  currentRoundBuildings: string[];
  onPickBuilding: (buildingId: string) => void;
  nextButtonText: string;
  onFinishRound: () => void;
}

const GamePlay = ({
  currentRoundBuildings,
  onPickBuilding,
  nextButtonText,
  onFinishRound,
}: GamePlayProps) => {
  return (
    <View style={styles.container}>
      <Text>GamePlay</Text>
    </View>
  );
};

export default GamePlay;
