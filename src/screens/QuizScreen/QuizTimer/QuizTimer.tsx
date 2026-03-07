import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { CustomContainer, CustomIcon, CustomText } from 'src/components';
import { formatMsToTime, hp, wp } from 'src/utils';

interface QuizTimerProps {
  time: number;
  onTimeEnd: () => void;
  stopTimer: boolean;
}

const QuizTimer = ({ time, onTimeEnd, stopTimer }: QuizTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    if (stopTimer) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [stopTimer]);

  useEffect(() => {
    if (timeLeft === 0 && !stopTimer) {
      onTimeEnd();
    }
  }, [timeLeft, onTimeEnd, stopTimer]);

  return (
    <View style={styles.timerContainer}>
      <CustomContainer variant="gradient" style={styles.clockContainer}>
        <CustomIcon name="clock" width={wp(24)} height={hp(24)} />
      </CustomContainer>
      <CustomContainer variant="gradient" style={styles.timerTextContainer}>
        <CustomText style={styles.timerText}>
          {formatMsToTime(timeLeft)}
        </CustomText>
      </CustomContainer>
    </View>
  );
};

export default QuizTimer;
