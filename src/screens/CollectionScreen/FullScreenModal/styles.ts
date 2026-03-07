import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    zIndex: 100,
    top: hp(50),
    right: wp(24),
    paddingHorizontal: wp(16),
    paddingVertical: wp(2),
    borderRadius: wp(20),
    borderWidth: wp(1),
    borderColor: COLORS.white,
    backgroundColor: COLORS.btn_light_overlay,
  },
  closeButtonText: {
    fontSize: sp(24),
  },
});
