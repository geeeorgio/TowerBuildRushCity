import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: wp(14),
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(4),
  },
  image: {
    width: '85%',
    height: '85%',
  },
  text: {
    fontSize: sp(24),
    fontFamily: FONTS.Bold,
  },
});
