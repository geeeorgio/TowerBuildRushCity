import { useState } from 'react';
import { View } from 'react-native';

import BricksCountBar from './BricksCountBar/BricksCountBar';
import BrickToast from './BrickToast/BrickToast';
import CityList from './CityList/CityList';
import { styles } from './styles';

import { CustomHeader } from 'src/components';
import { usePersistContext } from 'src/hooks';
import type { Building } from 'src/types';

const CityScreen = () => {
  const {
    buildingsContextList,
    bricksContextCount,
    setIsBuildingContext,
    decrementBricksContextCount,
  } = usePersistContext();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const buildingInProgress = buildingsContextList.some((b) => b.isBuilding);

  const handleOpenBuildingMode = (building: Building) => {
    if (buildingInProgress) {
      setErrorMessage('Please wait for the current building to be built');
      return;
    }
    if (bricksContextCount < building.price) {
      setErrorMessage('Not enough bricks');
      return;
    }

    decrementBricksContextCount(building.price);
    setIsBuildingContext(building.id);
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="My City" />
      <View style={styles.bricksCountBarContainer}>
        <BricksCountBar count={bricksContextCount} />
      </View>

      <CityList
        data={buildingsContextList}
        onOpenBuildingMode={handleOpenBuildingMode}
      />

      {errorMessage && (
        <BrickToast
          isVisible={!!errorMessage}
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </View>
  );
};

export default CityScreen;
