import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: hp(20),
  },
  imgContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: '100%',
    gap: wp(10),
    paddingHorizontal: wp(16),
    paddingTop: hp(6),
    paddingBottom: hp(24),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(20),
  },
  title: {
    fontSize: sp(26),
    color: COLORS.yellow,
    textShadowColor: COLORS.yellow_border,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  bricksContainer: {
    width: '50%',
    height: hp(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(6),
  },
  bricksImageContainer: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(10),
    padding: wp(10),
  },
  bricksImage: {
    width: '100%',
    height: '100%',
  },
  bricksCountContainer: {
    flex: 0.75,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(10),
  },
  bricksCountText: {
    fontSize: sp(18),
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
