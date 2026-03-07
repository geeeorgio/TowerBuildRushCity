import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { GUIDE_MAN_IMAGES, QUIZ_START_TEXT } from 'src/constants';

interface QuizIntroProps {
  onStartQuiz: () => void;
}

const QuizIntro = ({ onStartQuiz }: QuizIntroProps) => {
  return (
    <>
      <CustomContainer colorVariant="lightBlue" style={styles.contentContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={GUIDE_MAN_IMAGES.brick_man}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <CustomText style={styles.title}>{QUIZ_START_TEXT.title}</CustomText>
          <CustomText style={styles.description}>
            {QUIZ_START_TEXT.description}
          </CustomText>
        </View>
      </CustomContainer>

      <View style={styles.bottomContainer}>
        <View style={styles.manContainer}>
          <Image
            source={GUIDE_MAN_IMAGES.quiz_start}
            style={styles.img}
            resizeMode="contain"
          />
        </View>

        <CustomButton onPress={onStartQuiz} style={styles.btn}>
          <CustomText style={styles.btnText}>
            {QUIZ_START_TEXT.btn_text}
          </CustomText>
        </CustomButton>
      </View>
    </>
  );
};

export default QuizIntro;
