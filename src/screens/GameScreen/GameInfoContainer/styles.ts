import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  setupContainer: {
    width: '100%',
    height: hp(160),
    flexDirection: 'row',
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
    fontSize: sp(22),
    color: COLORS.yellow,
    textShadowColor: COLORS.yellow_border,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  timeContainer: {
    width: '66%',
    height: hp(44),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(4),
  },
  clockContainer: {
    flex: 0.4,
    height: '100%',
    paddingHorizontal: wp(12),
    borderRadius: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeTextContainer: {
    flex: 0.6,
    height: '100%',
    paddingHorizontal: wp(16),
    borderRadius: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: sp(16),
    fontFamily: FONTS.Bold,
  },
  roundContainer: {
    width: '66%',
    paddingVertical: hp(4),
    borderRadius: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundText: {
    fontSize: sp(16),
    fontFamily: FONTS.Bold,
  },
});
