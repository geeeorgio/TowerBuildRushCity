import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomIcon from '../CustomIcons/CustomIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { LOGO_IMG } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';
import { hp, wp } from 'src/utils';

interface CustomHeaderProps {
  title: string;
  onGoBack?: () => void;
}

const CustomHeader = ({ title, onGoBack }: CustomHeaderProps) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        navigation.navigate('HomeScreen');
      }
    }
  };

  return (
    <CustomContainer colorVariant="yellow" style={styles.container}>
      <CustomButton
        variant="blue"
        onPress={handleGoBack}
        style={styles.backButton}
      >
        <CustomIcon name="back" width={wp(24)} height={hp(24)} />
      </CustomButton>
      <CustomText style={styles.title}>{title}</CustomText>
      <View style={styles.logoContainer}>
        <Image source={LOGO_IMG} style={styles.logo} resizeMode="cover" />
      </View>
    </CustomContainer>
  );
};

export default CustomHeader;
