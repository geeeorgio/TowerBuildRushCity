import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { GUIDE_MAN_IMAGES, ONBOARD_TEXT } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen2 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen3');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CustomContainer variant="gradient" style={styles.infoContainer}>
          <CustomText style={styles.title}>
            {ONBOARD_TEXT.onboarding2.title}
          </CustomText>
          <CustomText style={styles.description}>
            {ONBOARD_TEXT.onboarding2.description}
          </CustomText>
        </CustomContainer>

        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dot1]} />
          <View style={[styles.dot, styles.dot2]} />
          <View style={[styles.dot, styles.dot3]} />
        </View>
      </View>

      <CustomButton onPress={handleNext} style={styles.btn}>
        <CustomText style={styles.btnText}>
          {ONBOARD_TEXT.onboarding2.btn_text}
        </CustomText>
      </CustomButton>
      <Image
        source={GUIDE_MAN_IMAGES.onbd2}
        style={styles.img}
        resizeMode="contain"
      />
    </View>
  );
};

export default OnboardingScreen2;
