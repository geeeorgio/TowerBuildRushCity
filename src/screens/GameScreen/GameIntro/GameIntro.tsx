import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { GUIDE_MAN_IMAGES, MINI_GAME_IMG, MINI_GAME_INFO } from 'src/constants';

interface GameIntroProps {
  onStartGame: () => void;
}

const GameIntro = ({ onStartGame }: GameIntroProps) => {
  return (
    <View style={styles.container}>
      <CustomContainer colorVariant="lightBlue" style={styles.introContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={GUIDE_MAN_IMAGES.brick_man}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <CustomText style={styles.title}>{MINI_GAME_INFO.title}</CustomText>
          <CustomText style={styles.description}>
            {MINI_GAME_INFO.description}
          </CustomText>
        </View>
      </CustomContainer>

      <View style={styles.bottomContainer}>
        <View style={styles.houseImgContainer}>
          <Image
            source={MINI_GAME_IMG}
            style={styles.houseImg}
            resizeMode="contain"
          />
        </View>
        <CustomButton onPress={onStartGame} style={styles.btn}>
          <CustomText style={styles.btnText}>
            {MINI_GAME_INFO.btn_text}
          </CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default GameIntro;
