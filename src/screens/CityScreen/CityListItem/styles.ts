import { StyleSheet } from 'react-native';

import { hp } from 'src/utils';
export const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: hp(100),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buildingComposition: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  buildingImage: {
    width: '95%',
    height: '90%',
    zIndex: 3,
  },
  plateImage: {
    position: 'absolute',
    bottom: -hp(12),
    width: '100%',
    height: hp(24),
    zIndex: 1,
  },
  bricksCountBarContainer: {
    position: 'absolute',
    width: '90%',
    bottom: hp(24),
    zIndex: 10,
    alignSelf: 'center',
  },
});
