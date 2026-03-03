import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(8),
    alignItems: 'center',
  },
  button: {
    width: '90%',
    paddingVertical: hp(12),
    paddingHorizontal: wp(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityBtn: {
    width: '100%',
  },
  aboutBtn: {
    maxWidth: wp(70),
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
