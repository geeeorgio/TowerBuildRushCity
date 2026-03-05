import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    width: '100%',
    transform: [{ scaleX: -1 }],
  },
  trackWrapper: {
    width: '85%',
    alignItems: 'center',
  },
  track: {
    position: 'relative',
    width: '100%',
    height: hp(16),
    padding: wp(4),
    borderRadius: wp(10),
    backgroundColor: COLORS.blue_border,
    overflow: 'hidden',
  },
  fillText: {
    position: 'absolute',
    top: 0,
    fontSize: sp(8),
    fontFamily: FONTS.Bold,
    zIndex: 10,
    alignSelf: 'center',
  },
  fill: {
    height: '100%',
    borderRadius: wp(10),
    backgroundColor: COLORS.blue_gradient[0],
  },
});
