import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: hp(30),
  },
  introContainer: {
    width: '100%',
    height: hp(140),
    flexDirection: 'row',
    gap: wp(2),
  },
  imgContainer: {
    flex: 0.35,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 0.65,
    gap: wp(6),
    paddingHorizontal: wp(10),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: sp(26),
    color: COLORS.yellow,
    textShadowColor: COLORS.yellow_border,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: sp(14),
  },
  bottomContainer: {
    width: '100%',
    paddingHorizontal: wp(10),
    justifyContent: 'center',
  },
  houseImgContainer: {
    width: '100%',
    height: hp(210),
  },
  houseImg: {
    width: '100%',
    height: '100%',
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(10),
    zIndex: 10,
    marginTop: '-5%',
  },
  btnText: {
    fontSize: sp(24),
    color: COLORS.black,
  },
});
