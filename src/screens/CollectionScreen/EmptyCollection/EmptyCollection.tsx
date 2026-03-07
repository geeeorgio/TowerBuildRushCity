import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomContainer, CustomText } from 'src/components';
import { NO_COLLECTIONS_INFO } from 'src/constants';

const EmptyCollection = () => {
  return (
    <CustomContainer colorVariant="lightBlue" style={styles.emptyContainer}>
      <View style={styles.emptyImageContainer}>
        <Image
          source={NO_COLLECTIONS_INFO.img}
          resizeMode="contain"
          style={styles.emptyImage}
        />
      </View>
      <View style={styles.emptyInfoContainer}>
        <CustomText style={styles.emptyTitle}>
          {NO_COLLECTIONS_INFO.title}
        </CustomText>
        <CustomText style={styles.emptyDescription}>
          {NO_COLLECTIONS_INFO.description}
        </CustomText>
      </View>
    </CustomContainer>
  );
};

export default EmptyCollection;
