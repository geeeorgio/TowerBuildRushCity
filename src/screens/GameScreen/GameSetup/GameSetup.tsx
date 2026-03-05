import { View } from 'react-native';

import { styles } from './styles';

interface GameSetupProps {
  buildingsToPick: string[];
  onStartGame: () => void;
}

const GameSetup = ({ buildingsToPick, onStartGame }: GameSetupProps) => {
  return <View style={styles.container}></View>;
};

export default GameSetup;
