import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(20),
    gap: hp(20),
  },
  imgContainer: {
    width: '55%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp(2),
    borderColor: COLORS.blue_border,
    borderRadius: wp(10),
    overflow: 'hidden',
  },
  loseImgContainer: {
    width: '75%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: '100%',
    gap: wp(6),
    paddingHorizontal: wp(16),
    paddingTop: hp(6),
    paddingBottom: hp(24),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(10),
  },
  title: {
    fontSize: sp(24),
    color: COLORS.yellow,
    textShadowColor: COLORS.yellow_border,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: sp(14),
    fontFamily: FONTS.Bold,
    textAlign: 'center',
  },
  btn: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(10),
  },
  btnText: {
    fontSize: sp(20),
    color: COLORS.black,
  },
});
