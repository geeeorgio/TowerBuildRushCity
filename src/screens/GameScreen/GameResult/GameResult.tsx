import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { BRICK_FRAME, GUIDE_MAN_IMAGES } from 'src/constants';
import { convertNumber, handleShare } from 'src/utils';

interface GameResultProps {
  totalBricks: number;
}

const GameResult = ({ totalBricks }: GameResultProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={GUIDE_MAN_IMAGES.quiz_end}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <CustomContainer colorVariant="lightBlue" style={styles.infoContainer}>
        <CustomText style={styles.title}>Result</CustomText>
        <View style={styles.bricksContainer}>
          <CustomContainer
            colorVariant="darkBlue"
            style={styles.bricksImageContainer}
          >
            <Image
              source={BRICK_FRAME}
              style={styles.bricksImage}
              resizeMode="contain"
            />
          </CustomContainer>
          <CustomContainer
            colorVariant="darkBlue"
            style={styles.bricksCountContainer}
          >
            <CustomText style={styles.bricksCountText}>
              {convertNumber(totalBricks)}
            </CustomText>
          </CustomContainer>
        </View>
      </CustomContainer>
      <CustomButton onPress={() => handleShare()} style={styles.btn}>
        <CustomText style={styles.btnText}>Share</CustomText>
      </CustomButton>
    </View>
  );
};

export default GameResult;
