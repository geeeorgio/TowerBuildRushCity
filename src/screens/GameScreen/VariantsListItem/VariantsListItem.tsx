import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import type { Building } from 'src/types';
import { hp, wp } from 'src/utils';

interface VariantsListItemProps {
  item: Building;
  onPickVariant: (buildingId: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const VariantsListItem = ({
  item,
  onPickVariant,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: VariantsListItemProps) => {
  return (
    <View style={styles.item}>
      <CustomContainer colorVariant="lightBlue" style={styles.variantContainer}>
        {!isFirst ? (
          <CustomButton style={styles.iconContainer} onPress={onPrev}>
            <CustomIcon name="leftArr" width={wp(20)} height={hp(20)} />
          </CustomButton>
        ) : (
          <View style={styles.iconContainer} />
        )}

        <CustomContainer colorVariant="darkBlue" style={styles.imageContainer}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.image}
          />
        </CustomContainer>

        {!isLast ? (
          <CustomButton style={styles.iconContainer} onPress={onNext}>
            <CustomIcon name="rightArr" width={wp(24)} height={hp(24)} />
          </CustomButton>
        ) : (
          <View style={styles.iconContainer} />
        )}
      </CustomContainer>
      <CustomButton
        style={styles.pickVariantButton}
        onPress={() => onPickVariant(item.id)}
      >
        <CustomText style={styles.pickVariantButtonText}>Choose</CustomText>
      </CustomButton>
    </View>
  );
};

export default VariantsListItem;
