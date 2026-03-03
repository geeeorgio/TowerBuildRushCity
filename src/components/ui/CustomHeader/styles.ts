import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: hp(80),
    padding: wp(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: wp(60),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: wp(60),
    aspectRatio: 1,
    borderRadius: wp(20),
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
  title: {
    flex: 1,
    fontSize: sp(26),
    fontFamily: FONTS.SemiBold,
    color: COLORS.black,
    textAlign: 'center',
  },
});
