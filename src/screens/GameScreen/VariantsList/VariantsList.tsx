import { useCallback, useRef, useState } from 'react';
import { FlatList, View } from 'react-native';

import VariantsListItem from '../VariantsListItem/VariantsListItem';

import { styles } from './styles';

import type { Building } from 'src/types';

interface VariantsListProps {
  data: Building[];
  onPickVariant: (buildingId: string) => void;
}

const VariantsList = ({ data, onPickVariant }: VariantsListProps) => {
  const flatListRef = useRef<FlatList>(null);
  const [_currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (index < 0 || index >= data.length) return;

      flatListRef.current?.scrollToIndex({ index, animated: true });
      setCurrentIndex(index);
    },
    [data.length],
  );

  const renderItem = useCallback(
    ({ item, index }: { item: Building; index: number }) => {
      return (
        <VariantsListItem
          item={item}
          onPickVariant={onPickVariant}
          onNext={() => scrollToIndex(index + 1)}
          onPrev={() => scrollToIndex(index - 1)}
          isFirst={index === 0}
          isLast={index === data.length - 1}
        />
      );
    },
    [onPickVariant, scrollToIndex, data.length],
  );

  const keyExtractor = (item: Building) => item.id;

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      style={styles.list}
      snapToAlignment="center"
      contentContainerStyle={styles.listContainer}
      ListFooterComponent={<View style={styles.listFooter} />}
    />
  );
};

export default VariantsList;
