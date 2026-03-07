import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: hp(220),
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: wp(16),
    borderWidth: wp(2),
    borderColor: COLORS.blue_border,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  btnsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
    paddingBottom: hp(10),
    gap: wp(6),
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp(6),
    borderRadius: wp(15),
  },
});
