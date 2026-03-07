import { Modal, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { GAME_ALERT_INFO } from 'src/constants';

interface GameAlertModalProps {
  isVisible: boolean;
  onBackToGame: () => void;
  onBackToMenu: () => void;
  message?: string | null;
}

const GameAlertModal = ({
  isVisible,
  onBackToGame,
  onBackToMenu,
  message,
}: GameAlertModalProps) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onBackToGame}
      style={styles.container}
      statusBarTranslucent={true}
    >
      <TouchableOpacity
        style={styles.contentContainer}
        activeOpacity={1}
        onPress={onBackToGame}
      >
        <CustomContainer colorVariant="darkBlue" style={styles.content}>
          <CustomText style={styles.text}>
            {message ?? GAME_ALERT_INFO.title}
          </CustomText>
          <View style={styles.btnContainer}>
            <CustomButton onPress={onBackToGame} style={styles.btn}>
              <CustomText style={styles.continueBtnText}>
                {GAME_ALERT_INFO.continueBtnText}
              </CustomText>
            </CustomButton>
            <CustomButton
              variant="red"
              onPress={onBackToMenu}
              style={styles.btn}
            >
              <CustomText style={styles.quitBtnText}>
                {GAME_ALERT_INFO.quitBtnText}
              </CustomText>
            </CustomButton>
          </View>
        </CustomContainer>
      </TouchableOpacity>
    </Modal>
  );
};

export default GameAlertModal;
