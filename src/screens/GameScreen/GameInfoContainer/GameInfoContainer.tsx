import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomContainer, CustomIcon, CustomText } from 'src/components';
import { GUIDE_MAN_IMAGES } from 'src/constants';
import { formatMsToTime, hp, wp } from 'src/utils';

interface GameInfoContainerProps {
  title: string;
  setupTime: number;
  currentRound: number;
  onStartGame: () => void;
}

const GameInfoContainer = ({
  title,
  setupTime,
  currentRound,
  onStartGame,
}: GameInfoContainerProps) => {
  const [timeLeft, setTimeLeft] = useState(setupTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      onStartGame();
    }
  }, [timeLeft, onStartGame]);

  return (
    <CustomContainer colorVariant="lightBlue" style={styles.setupContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={GUIDE_MAN_IMAGES.brick_man}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.infoContainer}>
        <CustomText style={styles.title}>{title}</CustomText>
        <View style={styles.timeContainer}>
          <CustomContainer
            colorVariant="darkBlue"
            style={styles.clockContainer}
          >
            <CustomIcon name="clock" width={wp(24)} height={hp(24)} />
          </CustomContainer>
          <CustomContainer
            colorVariant="darkBlue"
            style={styles.timeTextContainer}
          >
            <CustomText style={styles.timeText}>
              {formatMsToTime(timeLeft)}
            </CustomText>
          </CustomContainer>
        </View>
        <CustomContainer colorVariant="darkBlue" style={styles.roundContainer}>
          <CustomText style={styles.roundText}>
            {`Round ${currentRound}/3`}
          </CustomText>
        </CustomContainer>
      </View>
    </CustomContainer>
  );
};

export default GameInfoContainer;
