import { useCallback, useState } from 'react';
import { Image, View } from 'react-native';

import BuildingsList from '../BuldingsList/BuildingsList';
import GameInfoContainer from '../GameInfoContainer/GameInfoContainer';
import VariantsList from '../VariantsList/VariantsList';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { GUIDE_MAN_IMAGES } from 'src/constants';
import type { Building, EmptySlotType } from 'src/types';

interface GamePlayProps {
  currentRoundBuildings: Building[];
  pickedBuildings: EmptySlotType[];
  currentRound: number;
  onPickBuilding: (buildingId: string, slotIndex: number) => void;
  nextButtonText: string;
  onFinishRound: (earnedBricks: number) => void;
  roundDuration: number;
}

const GamePlay = ({
  currentRoundBuildings,
  pickedBuildings,
  onPickBuilding,
  nextButtonText,
  onFinishRound,
  currentRound,
  roundDuration,
}: GamePlayProps) => {
  const [showRoundResult, setShowRoundResult] = useState<boolean>(false);
  const [showVariants, setShowVariants] = useState(false);
  const [activeSlotIndex, setActiveSlotIndex] = useState<number | null>(null);
  const [correctIds, setCorrectIds] = useState<boolean[]>([]);

  const handleFinishRound = () => {
    const allCorrect = correctIds.every(Boolean);
    const earnedBricks = allCorrect ? 10 : 0;

    onFinishRound(earnedBricks);
  };

  const handleContinueRound = useCallback(() => {
    setCorrectIds(
      currentRoundBuildings.map((b, idx) => {
        return pickedBuildings[idx].correctId === b.id;
      }),
    );

    setShowRoundResult(true);
  }, [currentRoundBuildings, pickedBuildings]);

  const handleOpenVariants = (slotId: string) => {
    const slotIndex = pickedBuildings.findIndex((b) => b._id === slotId);

    setActiveSlotIndex(slotIndex);
    setShowVariants(true);
  };

  const handlePickVariant = (buildingId: string) => {
    if (activeSlotIndex === null) return;
    onPickBuilding(buildingId, activeSlotIndex);
    setShowVariants(false);
    setActiveSlotIndex(null);
  };

  return (
    <View style={styles.container}>
      {showRoundResult ? (
        <CustomContainer
          colorVariant="lightBlue"
          style={styles.roundResultContainer}
        >
          <View style={styles.imgContainer}>
            <Image
              source={GUIDE_MAN_IMAGES.brick_man}
              style={styles.img}
              resizeMode="contain"
            />
          </View>
          <View style={styles.infoContainer}>
            <CustomText style={styles.title}>
              Round {currentRound} results
            </CustomText>
            <CustomButton onPress={handleFinishRound} style={styles.btn}>
              <CustomText style={styles.btnText}>{nextButtonText}</CustomText>
            </CustomButton>
          </View>
        </CustomContainer>
      ) : (
        <GameInfoContainer
          title="Specify the sequence"
          setupTime={roundDuration}
          currentRound={currentRound}
          onStartGame={handleContinueRound}
        />
      )}

      <View style={styles.buildingsContainer}>
        <BuildingsList
          data={pickedBuildings}
          onPickBuilding={handleOpenVariants}
          disabled={showRoundResult}
          correctIds={correctIds}
        />
      </View>

      {!showRoundResult && showVariants && (
        <View style={styles.variantsContainer}>
          <VariantsList
            data={currentRoundBuildings}
            onPickVariant={handlePickVariant}
          />
        </View>
      )}

      {showRoundResult && (
        <View style={styles.buildingsContainer}>
          <BuildingsList data={currentRoundBuildings} />
        </View>
      )}
    </View>
  );
};

export default GamePlay;
