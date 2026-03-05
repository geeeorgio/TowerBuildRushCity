import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buildingComposition: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  buildingImage: {
    width: '80%',
    height: '80%',
    zIndex: 3,
    marginBottom: '-12%',
  },
  plateImage: {
    width: '100%',
    height: '20%',
    zIndex: 1,
  },
  bricksCountBarContainer: {
    position: 'absolute',
    width: '90%',
    bottom: '35%',
    zIndex: 10,
    alignSelf: 'center',
  },
  buildingProgressContainer: {
    position: 'absolute',
    width: '100%',
    height: '85%',
    bottom: '15%',
    zIndex: 10,
  },
});
