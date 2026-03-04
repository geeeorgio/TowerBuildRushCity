import { View } from 'react-native';

import EmpryCollection from './EmptyCollection/EmpryCollection';
import { styles } from './styles';

import { CustomHeader } from 'src/components';
import { usePersistContext } from 'src/hooks';

const CollectionScreen = () => {
  const { collectedContextSkins } = usePersistContext();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader title="Collection" />
      </View>

      {collectedContextSkins.length === 0 && <EmpryCollection />}
    </View>
  );
};

export default CollectionScreen;
