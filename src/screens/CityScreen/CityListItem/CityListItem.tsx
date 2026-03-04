import { Image, View } from 'react-native';

import BricksCountBar from '../BricksCountBar/BricksCountBar';

import { styles } from './styles';

import { CustomButton } from 'src/components';
import { PLATE_FRAME } from 'src/constants';
import type { Building } from 'src/types';

interface CityListItemProps {
  building: Building;
  onOpenBuildingMode: (building: Building) => void;
}

const CityListItem = ({ building, onOpenBuildingMode }: CityListItemProps) => {
  return (
    <CustomButton
      variant="default"
      onPress={() => onOpenBuildingMode(building)}
      style={styles.item}
      disabled={building.isOpen}
    >
      <View style={styles.buildingComposition}>
        <Image
          source={building.image}
          resizeMode="contain"
          style={styles.buildingImage}
          blurRadius={building.isOpen ? 0 : 1}
        />

        <Image
          source={PLATE_FRAME}
          resizeMode="contain"
          style={styles.plateImage}
        />

        {!building.isOpen && (
          <View style={styles.bricksCountBarContainer}>
            <BricksCountBar count={building.price} variant="small" />
          </View>
        )}
      </View>
    </CustomButton>
  );
};

export default CityListItem;
