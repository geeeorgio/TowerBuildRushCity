import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: hp(50),
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: wp(11),
  },
  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(20),
  },
  logoContainer: {
    width: wp(260),
    aspectRatio: 1,
    borderRadius: wp(28),
    borderWidth: wp(2),
    borderColor: COLORS.blue_border,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: '100%',
    paddingVertical: wp(10),
    paddingHorizontal: wp(16),
    gap: wp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: sp(26),
    color: COLORS.yellow,
    textAlign: 'center',
    textShadowColor: COLORS.yellow_border,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  description: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  btn: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(10),
  },
  btnText: {
    fontSize: sp(24),
    color: COLORS.black,
  },
});
