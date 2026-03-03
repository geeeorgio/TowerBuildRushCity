import { Image, View } from 'react-native';

import { styles } from './styles';

import { MenuNav } from 'src/components';
import { LOGO_IMG } from 'src/constants';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={LOGO_IMG} resizeMode="cover" style={styles.logo} />
      </View>
      <View style={styles.menuContainer}>
        <MenuNav />
      </View>
    </View>
  );
};

export default HomeScreen;
