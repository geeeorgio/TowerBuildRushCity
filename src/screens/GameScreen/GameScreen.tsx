import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';

import GameAlertModal from './GameAlertModal/GameAlertModal';
import GameIntro from './GameIntro/GameIntro';
import GamePlay from './GamePlay/GamePlay';
import GameResult from './GameResult/GameResult';
import GameSetup from './GameSetup/GameSetup';
import { styles } from './styles';

import { CustomHeader } from 'src/components';
import { BUILDINGS_LIST } from 'src/constants';
import type {
  GamePlayType,
  GameStatusType,
  MainStackNavigationProp,
} from 'src/types';
import { shuffleArray } from 'src/utils';

const createInitialSettings = (): GamePlayType => ({
  setupTime: 10000,
  currentRound: 1,
  totalRounds: 3,
  roundDuration: 30000,
  roundInfo: [...Array(3)].map((_, index) => ({
    roundNumber: index + 1,
    buildingsList: shuffleArray(BUILDINGS_LIST)
      .slice(0, 8)
      .map((b) => b),
    pickedBuildings: [...Array(8)].map((__, idx) => ({
      _id: `empty-${idx}`,
      content: '+',
      correctId: '',
      slotImage: null,
    })),
  })),
});

const GameScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const [status, setStatus] = useState<GameStatusType>('intro');
  const [settings, setSettings] = useState<GamePlayType>(
    createInitialSettings(),
  );
  const [showAlert, setShowAlert] = useState(false);

  const currentRoundData = settings.roundInfo[settings.currentRound - 1];

  const handlePickBuilding = (buildingId: string, slotIndex: number) => {
    const buildingData = BUILDINGS_LIST.find((b) => b.id === buildingId);

    setSettings((prev) => ({
      ...prev,
      roundInfo: prev.roundInfo.map((round) => {
        if (round.roundNumber === prev.currentRound) {
          return {
            ...round,
            pickedBuildings: round.pickedBuildings.map((slot, idx) =>
              idx === slotIndex
                ? {
                    ...slot,
                    correctId: buildingId,
                    slotImage: buildingData?.image ?? null,
                  }
                : slot,
            ),
          };
        }
        return round;
      }),
    }));
  };

  const handleFinishRound = () => {
    if (settings.currentRound === settings.totalRounds) {
      setStatus('result');
      return;
    }

    setSettings((prev) => ({
      ...prev,
      currentRound: Math.min(prev.currentRound + 1, prev.totalRounds),
    }));

    setStatus('setup');
  };

  const nextButtonText =
    settings.currentRound === settings.totalRounds
      ? 'Go results'
      : 'Next round';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomHeader
          title="Mini Game"
          onGoBack={
            status !== 'intro' && status !== 'result'
              ? () => setShowAlert(true)
              : undefined
          }
        />
      </View>

      {status === 'intro' && (
        <GameIntro onStartGame={() => setStatus('setup')} />
      )}

      {status === 'setup' && (
        <GameSetup
          onStartGame={() => setStatus('game')}
          buildingsToPick={currentRoundData.buildingsList}
          setupTime={settings.setupTime}
          currentRound={settings.currentRound}
        />
      )}

      {status === 'game' && (
        <GamePlay
          currentRoundBuildings={currentRoundData.buildingsList}
          pickedBuildings={currentRoundData.pickedBuildings}
          onFinishRound={handleFinishRound}
          onPickBuilding={handlePickBuilding}
          nextButtonText={nextButtonText}
          currentRound={settings.currentRound}
          roundDuration={settings.roundDuration}
        />
      )}

      {status === 'result' && <GameResult resultInfo={settings} />}

      {showAlert && (
        <GameAlertModal
          isVisible={showAlert}
          onBackToGame={() => setShowAlert(false)}
          onBackToMenu={() => navigation.navigate('HomeScreen')}
        />
      )}
    </View>
  );
};

export default GameScreen;
