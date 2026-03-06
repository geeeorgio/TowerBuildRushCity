import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(20),
  },
  buildingsContainer: {
    width: '100%',
    paddingHorizontal: wp(11),
  },
  roundResultContainer: {
    paddingHorizontal: wp(11),
  },
  imgContainer: {
    width: '100%',
    height: hp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: sp(24),
  },
  btn: {
    width: '100%',
    height: hp(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: sp(16),
  },
  variantsContainer: {
    width: '100%',
    paddingHorizontal: wp(11),
  },
});
