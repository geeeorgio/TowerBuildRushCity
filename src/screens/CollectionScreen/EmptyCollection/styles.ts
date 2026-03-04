import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  emptyContainer: {
    marginTop: hp(200),
    width: '100%',
    flexDirection: 'row',
    paddingVertical: hp(10),
    paddingHorizontal: wp(16),
    gap: wp(10),
    justifyContent: 'space-between',
  },
  emptyImageContainer: {
    width: wp(100),
    height: wp(120),
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImage: {
    width: '100%',
    height: '100%',
  },
  emptyInfoContainer: {
    flex: 1,
    gap: wp(6),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: sp(26),
    fontFamily: FONTS.SemiBold,
    color: COLORS.yellow,
    textShadowColor: COLORS.yellow_border,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  emptyDescription: {
    fontSize: sp(14),
  },
});
