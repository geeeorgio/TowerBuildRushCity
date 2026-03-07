import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    height: hp(140),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(4),
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
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: wp(6),
  },
  title: {
    fontSize: sp(22),
    color: COLORS.yellow,
    textShadowColor: COLORS.yellow_border,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: sp(14),
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(11),
  },
  manContainer: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    paddingVertical: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: sp(24),
    color: COLORS.black,
  },
});
