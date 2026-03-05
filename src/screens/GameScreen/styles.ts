import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: hp(50),
    gap: hp(24),
  },
  header: {
    width: '100%',
    paddingHorizontal: wp(11),
  },
});
