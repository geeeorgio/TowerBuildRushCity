import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    borderRadius: wp(22),
    borderWidth: wp(2),
  },
  blue: {
    backgroundColor: COLORS.blue_btn,
    borderColor: COLORS.blue_border,
  },
  green: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green_border,
  },
  red: {
    backgroundColor: COLORS.red,
    borderColor: COLORS.red_border,
  },
  yellow: {
    backgroundColor: COLORS.yellow,
    borderColor: COLORS.yellow_border,
  },
});
