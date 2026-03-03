import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: wp(16),
    paddingTop: wp(30),
    paddingBottom: wp(40),
    gap: hp(40),
    alignItems: 'center',
  },
  logoContainer: {
    width: wp(260),
    aspectRatio: 1,
    borderRadius: wp(28),
    borderWidth: wp(2),
    borderColor: COLORS.blue_border,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    width: '100%',
  },
});
