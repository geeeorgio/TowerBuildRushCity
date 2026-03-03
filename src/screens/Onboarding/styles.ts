import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(16),
    paddingTop: wp(30),
    paddingBottom: wp(40),
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: wp(16),
    gap: hp(6),
    alignItems: 'center',
  },
  infoContainer: {
    width: '100%',
    padding: wp(20),
    gap: wp(6),
    alignItems: 'center',
  },
  title: {
    fontSize: sp(24),
    fontFamily: FONTS.SemiBold,
    color: COLORS.yellow,
    textShadowColor: COLORS.yellow_border,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textAlign: 'center',
  },
  description: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  dotsContainer: {
    width: '100%',
    gap: hp(3),
    alignItems: 'flex-end',
    paddingRight: wp(24),
  },
  dot: {
    backgroundColor: COLORS.blue_dot,
    borderWidth: wp(1),
    borderColor: COLORS.blue_border,
  },
  dot1: {
    width: wp(48),
    height: hp(48),
    borderRadius: wp(24),
  },
  dot2: {
    width: wp(32),
    height: hp(32),
    borderRadius: wp(16),
    marginRight: wp(35),
  },
  dot3: {
    width: wp(20),
    height: hp(20),
    borderRadius: wp(10),
    marginRight: wp(60),
  },
  img: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
  btn: {
    width: '100%',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(10),
  },
  btnText: {
    fontSize: sp(24),
    color: COLORS.black,
    textAlign: 'center',
  },
});
