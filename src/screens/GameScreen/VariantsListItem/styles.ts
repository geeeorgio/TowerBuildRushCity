import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH,
    borderRadius: wp(14),
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(16),
  },
  variantContainer: {
    width: '100%',
    height: hp(140),
    paddingVertical: hp(6),
    paddingHorizontal: wp(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    opacity: 1,
    width: wp(60),
    height: wp(60),
    borderRadius: wp(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: wp(14),
    padding: wp(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  pickVariantButton: {
    width: SCREEN_WIDTH - wp(33),
    borderRadius: wp(14),
    paddingVertical: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickVariantButtonText: {
    fontSize: sp(24),
    color: COLORS.black,
  },
});
