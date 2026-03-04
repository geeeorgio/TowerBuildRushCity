import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';

interface BrickToastProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}
const BrickToast = ({ isVisible, message, onClose }: BrickToastProps) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
      style={styles.container}
      statusBarTranslucent={true}
    >
      <TouchableOpacity
        style={styles.contentContainer}
        activeOpacity={1}
        onPress={onClose}
      >
        <CustomContainer colorVariant="darkBlue" style={styles.content}>
          <CustomText style={styles.text}>{message}</CustomText>
          <CustomButton onPress={onClose} style={styles.btn}>
            <CustomText style={styles.btnText}>Got it</CustomText>
          </CustomButton>
        </CustomContainer>
      </TouchableOpacity>
    </Modal>
  );
};

export default BrickToast;
