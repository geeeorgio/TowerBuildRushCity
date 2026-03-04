import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: hp(50),
    paddingHorizontal: wp(11),
    gap: hp(24),
  },
  bricksCountBarContainer: {
    width: '50%',
    height: hp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
