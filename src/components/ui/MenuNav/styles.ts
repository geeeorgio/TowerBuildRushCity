import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(10),
    alignItems: 'center',
  },
  button: {
    width: '90%',
    paddingVertical: hp(10),
    paddingHorizontal: wp(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityBtn: {
    width: '100%',
  },
  aboutBtn: {
    width: wp(66),
    height: hp(66),
  },
  cityText: {
    fontSize: sp(26),
    fontFamily: FONTS.SemiBold,
    color: COLORS.black,
    textAlign: 'center',
  },
  text: {
    fontSize: sp(20),
  },
});
