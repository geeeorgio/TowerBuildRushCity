import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(24),
    backgroundColor: COLORS.btn_dark_overlay,
  },
  content: {
    width: '90%',
    padding: wp(16),
    borderRadius: wp(22),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: sp(20),
    fontFamily: FONTS.Bold,
    textAlign: 'center',
    color: COLORS.white,
    textShadowColor: COLORS.red,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  btn: {
    width: '100%',
    marginTop: wp(16),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(10),
  },
  btnText: {
    fontSize: sp(18),
    fontFamily: FONTS.SemiBold,
    color: COLORS.black,
  },
});
