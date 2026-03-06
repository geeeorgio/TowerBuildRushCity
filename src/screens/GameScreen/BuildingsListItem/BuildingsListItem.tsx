import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import type { Building, EmptySlotType } from 'src/types';

interface BuildingsListItemProps {
  item: Building | EmptySlotType;
  onPickBuilding?: (buildingId: string) => void;
}

const BuildingsListItem = ({
  item,
  onPickBuilding,
}: BuildingsListItemProps) => {
  const isBuilding = 'image' in item;
  const itemId = 'image' in item ? item.id : item._id;
  const slotImage = 'slotImage' in item ? item.slotImage : null;

  return (
    <CustomButton
      variant="blue"
      style={styles.item}
      onPress={() => onPickBuilding?.(itemId)}
      disabled={isBuilding}
    >
      {isBuilding && (
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      )}
      {!isBuilding && !slotImage && (
        <CustomText style={styles.text}>{item.content}</CustomText>
      )}
      {!isBuilding && slotImage && (
        <Image source={slotImage} style={styles.image} resizeMode="contain" />
      )}
    </CustomButton>
  );
};

export default BuildingsListItem;
