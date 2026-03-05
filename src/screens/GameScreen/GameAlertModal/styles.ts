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
    paddingHorizontal: wp(20),
    backgroundColor: COLORS.btn_dark_overlay,
  },
  content: {
    width: '100%',
    paddingHorizontal: wp(10),
    paddingVertical: wp(16),
    borderRadius: wp(22),
    gap: wp(16),
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
  btnContainer: {
    width: '100%',
    gap: wp(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(10),
  },
  quitBtnText: {
    fontSize: sp(18),
    fontFamily: FONTS.Bold,
    color: COLORS.white,
    textAlign: 'center',
  },
  continueBtnText: {
    fontSize: sp(18),
    color: COLORS.black,
    textAlign: 'center',
  },
});
