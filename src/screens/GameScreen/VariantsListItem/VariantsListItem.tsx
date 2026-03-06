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
}

const VariantsListItem = ({ item, onPickVariant }: VariantsListItemProps) => {
  return (
    <CustomContainer colorVariant="lightBlue" style={styles.item}>
      <View style={styles.variantContainer}>
        <CustomButton style={styles.iconContainer} onPress={() => {}}>
          <CustomIcon name="leftArr" width={wp(24)} height={hp(24)} />
        </CustomButton>
        <CustomContainer colorVariant="lightBlue" style={styles.imageContainer}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.image}
          />
        </CustomContainer>
        <CustomButton style={styles.iconContainer} onPress={() => {}}>
          <CustomIcon name="rightArr" width={wp(24)} height={hp(24)} />
        </CustomButton>
      </View>

      <CustomButton
        style={styles.pickVariantButton}
        onPress={() => onPickVariant(item.id)}
      >
        <CustomText style={styles.pickVariantButtonText}>Choose</CustomText>
      </CustomButton>
    </CustomContainer>
  );
};

export default VariantsListItem;
