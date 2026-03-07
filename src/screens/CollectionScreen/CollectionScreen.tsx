import { View } from 'react-native';

import CollectionList from './CollectionList/CollectionList';
import EmptyCollection from './EmptyCollection/EmptyCollection';
import { styles } from './styles';

import { CustomHeader } from 'src/components';
import { usePersistContext } from 'src/hooks';

const CollectionScreen = () => {
  const { skinsContextList } = usePersistContext();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader title="Collection" />
      </View>

      {skinsContextList.length === 0 && <EmptyCollection />}

      {skinsContextList.length > 0 && (
        <CollectionList data={skinsContextList} />
      )}
    </View>
  );
};

export default CollectionScreen;
