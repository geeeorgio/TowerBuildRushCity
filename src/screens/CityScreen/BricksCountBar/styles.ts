import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  countContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(4),
  },
  brickImageContainer: {
    flex: 0.3,
    padding: wp(4),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  brickImage: {
    width: '100%',
    height: '100%',
  },
  bricksCountContainer: {
    flex: 0.7,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
    paddingHorizontal: wp(10),
  },
  bricksCountText: {
    fontSize: sp(24),
    fontFamily: FONTS.Bold,
    textAlign: 'center',
  },
  smallBricksCountText: {
    fontSize: sp(12),
  },
});
