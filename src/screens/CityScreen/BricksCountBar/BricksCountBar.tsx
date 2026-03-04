import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomContainer, CustomText } from 'src/components';
import { BRICK_FRAME } from 'src/constants';
import { convertNumber } from 'src/utils';

interface BricksCountBarProps {
  count: number;
  variant?: 'default' | 'small';
}

const BricksCountBar = ({
  count,
  variant = 'default',
}: BricksCountBarProps) => {
  return (
    <View style={styles.countContainer}>
      <CustomContainer variant="gradient" style={styles.brickImageContainer}>
        <Image
          source={BRICK_FRAME}
          resizeMode="contain"
          style={styles.brickImage}
        />
      </CustomContainer>
      <CustomContainer variant="gradient" style={styles.bricksCountContainer}>
        <CustomText
          style={[
            styles.bricksCountText,
            variant === 'small' && styles.smallBricksCountText,
          ]}
        >
          {convertNumber(count)}
        </CustomText>
      </CustomContainer>
    </View>
  );
};

export default BricksCountBar;
