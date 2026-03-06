import { useCallback } from 'react';
import { View } from 'react-native';

import BuildingsList from '../BuldingsList/BuildingsList';
import GameInfoContainer from '../GameInfoContainer/GameInfoContainer';

import { styles } from './styles';

import type { Building } from 'src/types';

interface GameSetupProps {
  buildingsToPick: Building[];
  onStartGame: () => void;
  setupTime: number;
  currentRound: number;
}

const GameSetup = ({
  buildingsToPick,
  onStartGame,
  setupTime,
  currentRound,
}: GameSetupProps) => {
  const handleStartGame = useCallback(() => {
    onStartGame();
  }, [onStartGame]);

  return (
    <View style={styles.container}>
      <GameInfoContainer
        title="Keep track of time"
        setupTime={setupTime}
        currentRound={currentRound}
        onStartGame={handleStartGame}
      />

      <View style={styles.buildingsContainer}>
        <BuildingsList data={buildingsToPick} />
      </View>
    </View>
  );
};

export default GameSetup;
