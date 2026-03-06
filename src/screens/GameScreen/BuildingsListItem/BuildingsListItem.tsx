import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import type { Building, EmptySlotType } from 'src/types';

interface BuildingsListItemProps {
  item: Building | EmptySlotType;
  onPickBuilding?: (buildingId: string) => void;
  disabled?: boolean;
  correctId?: boolean;
}

const BuildingsListItem = ({
  item,
  onPickBuilding,
  disabled,
  correctId,
}: BuildingsListItemProps) => {
  const isBuilding = 'image' in item;
  const itemId = 'image' in item ? item.id : item._id;
  const slotImage = 'slotImage' in item ? item.slotImage : null;

  const variant =
    correctId === undefined ? 'blue' : correctId ? 'green' : 'red';

  return (
    <CustomButton
      variant={variant}
      style={styles.item}
      onPress={() => onPickBuilding?.(itemId)}
      disabled={isBuilding || disabled}
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
