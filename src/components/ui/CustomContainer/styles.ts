import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  gradient: {
    borderRadius: wp(22),
    borderWidth: wp(1),
    borderColor: COLORS.blue_border,
  },
  lightBlue: {
    backgroundColor: COLORS.quiz_blue,
    borderTopColor: COLORS.blue_border,
    borderBottomColor: COLORS.blue_border,
    borderTopWidth: wp(1),
    borderBottomWidth: wp(1),
  },
  darkBlue: {
    backgroundColor: COLORS.blue_border,
    borderRadius: wp(22),
    borderWidth: wp(1),
    borderColor: COLORS.blue_border,
  },
  green: {
    backgroundColor: COLORS.green,
    borderWidth: wp(1),
    borderRadius: wp(22),
    borderColor: COLORS.green_border,
  },
  red: {
    backgroundColor: COLORS.red,
    borderWidth: wp(1),
    borderRadius: wp(22),
    borderColor: COLORS.red_border,
  },
  yellow: {
    backgroundColor: COLORS.yellow,
    borderWidth: wp(2),
    borderRadius: wp(22),
    borderColor: COLORS.yellow_border,
  },
});
