import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import CityListItem from '../CityListItem/CityListItem';

import { styles } from './styles';

import type { Building } from 'src/types';

interface CityListProps {
  data: Building[];
  onOpenBuildingMode: (building: Building) => void;
}

const CityList = ({ data, onOpenBuildingMode }: CityListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: Building }) => {
      return (
        <CityListItem building={item} onOpenBuildingMode={onOpenBuildingMode} />
      );
    },
    [onOpenBuildingMode],
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.listColumnWrapper}
      ListFooterComponent={<View style={styles.listFooter} />}
    />
  );
};

export default CityList;
