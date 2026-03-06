import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(16),
  },
  buildingsContainer: {
    width: '100%',
    paddingHorizontal: wp(11),
  },
  roundResultContainer: {
    width: '100%',
    height: hp(125),
    paddingHorizontal: wp(11),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  infoContainer: {
    flex: 0.65,
    gap: wp(4),
    paddingHorizontal: wp(6),
    paddingBottom: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: sp(20),
    color: COLORS.yellow,
    textShadowColor: COLORS.yellow_border,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  btn: {
    width: '66%',
    borderRadius: wp(14),
    paddingVertical: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: sp(14),
    color: COLORS.black,
  },
  variantsContainer: {
    width: '100%',
  },
});
