import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { GUIDE_MAN_IMAGES, ONBOARD_TEXT } from 'src/constants';
import { useOnboardingContext } from 'src/hooks';

const OnboardingScreen3 = () => {
  const { setIsContextOnboardingDone } = useOnboardingContext();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CustomContainer variant="gradient" style={styles.infoContainer}>
          <CustomText style={styles.title}>
            {ONBOARD_TEXT.onboarding3.title}
          </CustomText>
          <CustomText style={styles.description}>
            {ONBOARD_TEXT.onboarding3.description}
          </CustomText>
        </CustomContainer>

        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dot1]} />
          <View style={[styles.dot, styles.dot2]} />
          <View style={[styles.dot, styles.dot3]} />
        </View>
      </View>

      <CustomButton
        onPress={() => setIsContextOnboardingDone(true)}
        style={styles.btn}
      >
        <CustomText style={styles.btnText}>
          {ONBOARD_TEXT.onboarding3.btn_text}
        </CustomText>
      </CustomButton>
      <Image
        source={GUIDE_MAN_IMAGES.onbd3}
        style={styles.img}
        resizeMode="contain"
      />
    </View>
  );
};

export default OnboardingScreen3;
