import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: wp(14),
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(4),
  },
  variantContainer: {
    width: '100%',
    height: hp(150),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 0.2,
    width: wp(40),
    height: wp(40),
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: hp(100),
    borderRadius: wp(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  pickVariantButton: {
    width: '100%',
    height: wp(40),
    borderRadius: wp(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickVariantButtonText: {
    fontSize: sp(24),
    fontFamily: FONTS.Bold,
  },
});
