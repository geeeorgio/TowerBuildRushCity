import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomIcon from '../CustomIcons/CustomIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { MENU_ITEMS } from 'src/constants';
import type { MainStackNavigationProp, MainStackParamList } from 'src/types';
import { hp, wp } from 'src/utils';

const MenuNav = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      {MENU_ITEMS.map((item) => (
        <CustomButton
          key={item.name}
          onPress={() =>
            navigation.navigate(item.name as keyof MainStackParamList)
          }
          style={[
            styles.button,
            item.title === 'My city' && styles.cityBtn,
            item.title === 'About' && styles.aboutBtn,
          ]}
          variant={item.title === 'My city' ? 'yellow' : 'blue'}
        >
          {item.title === 'About' ? (
            <CustomIcon name="info" width={wp(30)} height={hp(30)} />
          ) : (
            <CustomText
              style={[styles.text, item.title === 'My city' && styles.cityText]}
            >
              {item.title}
            </CustomText>
          )}
        </CustomButton>
      ))}
    </View>
  );
};

export default MenuNav;
