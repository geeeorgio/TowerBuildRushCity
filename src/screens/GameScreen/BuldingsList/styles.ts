import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  listContainer: {
    gap: hp(10),
  },
  listColumnWrapper: {
    gap: wp(10),
  },
  listFooter: {
    height: hp(16),
  },
});
