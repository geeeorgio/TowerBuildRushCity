import React from 'react';
import { Image, Modal, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { CustomText } from 'src/components';
import type { Skin } from 'src/types';

interface FullScreenModalProps {
  isVisible: boolean;
  onClose: () => void;
  skin: Skin;
}

const FullScreenModal = ({
  isVisible,
  onClose,
  skin,
}: FullScreenModalProps) => {
  return (
    <Modal
      visible={isVisible}
      transparent={false}
      animationType="fade"
      statusBarTranslucent={true}
      onRequestClose={onClose}
      style={styles.container}
    >
      <View style={styles.fullScreenContainer}>
        <Image
          source={skin.image}
          style={styles.fullImage}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <CustomText style={styles.closeButtonText}>X</CustomText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FullScreenModal;
