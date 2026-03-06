import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import BuildingsListItem from '../BuildingsListItem/BuildingsListItem';

import { styles } from './styles';

import type { Building, EmptySlotType } from 'src/types';

interface BuildingsListProps {
  data: Building[] | EmptySlotType[];
  onPickBuilding?: (buildingId: string) => void;
}

const BuildingsList = ({ data, onPickBuilding }: BuildingsListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: Building | EmptySlotType }) => {
      return <BuildingsListItem item={item} onPickBuilding={onPickBuilding} />;
    },
    [onPickBuilding],
  );

  const keyExtractor = (item: Building | EmptySlotType) => {
    if ('image' in item) {
      return item.id;
    }

    return item._id;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      numColumns={4}
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.listColumnWrapper}
      ListFooterComponent={<View style={styles.listFooter} />}
    />
  );
};

export default BuildingsList;
