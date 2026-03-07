import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import {
  GUIDE_MAN_IMAGES,
  QUIZ_RESULTS_TEXT,
  SKINS_IMAGES,
  SKINS_LIST,
} from 'src/constants';
import { usePersistContext } from 'src/hooks';
import type { Skin } from 'src/types';
import { handleShare, shuffleArray } from 'src/utils';

interface QuizResultsProps {
  correctAnswers: number;
}

const QuizResults = ({ correctAnswers }: QuizResultsProps) => {
  const { collectedContextSkins, setCollectedContextSkins } =
    usePersistContext();

  const [newSkin, setNewSkin] = useState<Skin | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const isWin = correctAnswers >= 3;
  const result = isWin ? QUIZ_RESULTS_TEXT[1] : QUIZ_RESULTS_TEXT[0];

  useEffect(() => {
    if (isWin) {
      const possibleSkins = SKINS_LIST.filter(
        (skin) => !collectedContextSkins.includes(skin.id),
      );

      if (possibleSkins.length > 0) {
        const newSkinItem = shuffleArray(possibleSkins)[0];
        setNewSkin(newSkinItem);
        setCollectedContextSkins(newSkinItem.id);
      } else {
        setMessage(
          `You have already collected all wallpapers! Review them in the "Collection" section.`,
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={
          result.id === 'ok' ? styles.imgContainer : styles.loseImgContainer
        }
      >
        {result.id === 'ok' ? (
          <Image
            source={newSkin?.image || SKINS_IMAGES.skin_1}
            style={styles.img}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={GUIDE_MAN_IMAGES.quiz_end}
            style={styles.img}
            resizeMode="contain"
          />
        )}
      </View>

      <CustomContainer colorVariant="lightBlue" style={styles.infoContainer}>
        <CustomText
          style={styles.title}
        >{`Result: ${correctAnswers}/5`}</CustomText>
        <CustomText style={styles.description}>
          {message || result.description}
        </CustomText>
      </CustomContainer>

      <CustomButton onPress={() => handleShare()} style={styles.btn}>
        <CustomText style={styles.btnText}>{result.btn_text}</CustomText>
      </CustomButton>
    </View>
  );
};

export default QuizResults;
