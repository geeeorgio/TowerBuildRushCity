import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import CollectionListItem from '../CollectionListItem/CollectionListItem';

import { styles } from './styles';

import type { Skin } from 'src/types';

interface CollectionListProps {
  data: Skin[];
}

const CollectionList = ({ data }: CollectionListProps) => {
  const renderItem = useCallback(({ item }: { item: Skin }) => {
    return <CollectionListItem skin={item} />;
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.listColumnWrapper}
      ListFooterComponent={<View style={styles.listFooter} />}
    />
  );
};

export default CollectionList;
