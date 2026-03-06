import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import VariantsListItem from '../VariantsListItem/VariantsListItem';

import { styles } from './styles';

import type { Building } from 'src/types';

interface VariantsListProps {
  data: Building[];
  onPickVariant: (buildingId: string) => void;
}

const VariantsList = ({ data, onPickVariant }: VariantsListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: Building }) => {
      return <VariantsListItem item={item} onPickVariant={onPickVariant} />;
    },
    [onPickVariant],
  );

  const keyExtractor = (item: Building) => item.id;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      ListFooterComponent={<View style={styles.listFooter} />}
    />
  );
};

export default VariantsList;
