import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import BuildingsListItem from '../BuildingsListItem/BuildingsListItem';

import { styles } from './styles';

import type { Building, EmptySlotType } from 'src/types';

interface BuildingsListProps {
  data: Building[] | EmptySlotType[];
  onPickBuilding?: (buildingId: string) => void;
  disabled?: boolean;
  correctIds?: boolean[];
}

const BuildingsList = ({
  data,
  onPickBuilding,
  disabled,
  correctIds,
}: BuildingsListProps) => {
  const renderItem = useCallback(
    ({ item, index }: { item: Building | EmptySlotType; index: number }) => {
      return (
        <BuildingsListItem
          item={item}
          onPickBuilding={onPickBuilding}
          disabled={disabled}
          correctId={correctIds?.[index]}
        />
      );
    },
    [onPickBuilding, disabled, correctIds],
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
