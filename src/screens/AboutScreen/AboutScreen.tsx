import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomHeader,
  CustomText,
} from 'src/components';
import { ABOUT_INFO, LOGO_IMG } from 'src/constants';
import { handleShare } from 'src/utils';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader title="About" />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image source={LOGO_IMG} resizeMode="cover" style={styles.logo} />
        </View>
        <CustomContainer colorVariant="lightBlue" style={styles.infoContainer}>
          <CustomText style={styles.title}>{ABOUT_INFO.title}</CustomText>
          <CustomText style={styles.description}>
            {ABOUT_INFO.description}
          </CustomText>
        </CustomContainer>
      </View>

      <CustomButton style={styles.btn} onPress={() => handleShare()}>
        <CustomText style={styles.btnText}>{ABOUT_INFO.btn_text}</CustomText>
      </CustomButton>
    </View>
  );
};

export default AboutScreen;
