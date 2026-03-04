import { View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomIcon } from 'src/components';
import type { Skin } from 'src/types';
import { handleShare, hp, wp } from 'src/utils';

interface CollectionListItemProps {
  skin: Skin;
}

const CollectionListItem = ({ skin }: CollectionListItemProps) => {
  return (
    <View style={styles.btnsContainer}>
      <CustomButton onPress={() => {}} style={styles.btn}>
        <CustomIcon name="download" width={wp(24)} height={hp(24)} />
      </CustomButton>
      <CustomButton onPress={() => handleShare()} style={styles.btn}>
        <CustomIcon name="share" width={wp(24)} height={hp(24)} />
      </CustomButton>
    </View>
  );
};

export default CollectionListItem;
