import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  timerContainer: {
    width: '50%',
    height: hp(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(6),
  },
  clockContainer: {
    flex: 0.35,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(15),
  },
  timerTextContainer: {
    flex: 0.65,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(15),
  },
  timerText: {
    fontSize: sp(20),
    fontFamily: FONTS.Bold,
  },
});
