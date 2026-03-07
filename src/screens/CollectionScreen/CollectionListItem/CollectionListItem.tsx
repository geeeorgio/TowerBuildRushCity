import { useState } from 'react';
import { ImageBackground, View } from 'react-native';

import FullScreenModal from '../FullScreenModal/FullScreenModal';

import { styles } from './styles';

import { CustomButton, CustomIcon } from 'src/components';
import { COLORS } from 'src/constants';
import GameAlertModal from 'src/screens/GameScreen/GameAlertModal/GameAlertModal';
import type { Skin } from 'src/types';
import { handleShare, hp, wp } from 'src/utils';

interface CollectionListItemProps {
  skin: Skin;
}

const CollectionListItem = ({ skin }: CollectionListItemProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [isFullView, setIsFullView] = useState(false);

  const handleShareSkin = () => {
    setMessage(null);

    if (!skin.isOpen) {
      setMessage(
        `Oops! It's locked. \n Please complete the quiz to unlock this view`,
      );
      return;
    }

    handleShare();
  };

  const handleDownloadSkin = () => {
    setMessage(null);

    if (!skin.isOpen) {
      setMessage(
        `Not so fast, builder! \n This wallpaper is waiting for your quiz victory`,
      );
      return;
    }

    setIsFullView(true);
  };

  return (
    <ImageBackground
      source={skin.image}
      style={styles.imageBackground}
      imageStyle={styles.image}
      resizeMode="cover"
      blurRadius={skin.isOpen ? 0 : 10}
    >
      <View style={styles.btnsContainer}>
        <CustomButton onPress={handleDownloadSkin} style={styles.btn}>
          <CustomIcon
            name="download"
            width={wp(33)}
            height={hp(33)}
            color={COLORS.black}
          />
        </CustomButton>
        <CustomButton onPress={handleShareSkin} style={styles.btn}>
          <CustomIcon
            name="share"
            width={wp(20)}
            height={hp(20)}
            color={COLORS.black}
          />
        </CustomButton>
      </View>

      <GameAlertModal
        isVisible={Boolean(message)}
        onBackToGame={() => setMessage(null)}
        onBackToMenu={() => setMessage(null)}
        message={message}
      />

      <FullScreenModal
        isVisible={isFullView}
        onClose={() => setIsFullView(false)}
        skin={skin}
      />
    </ImageBackground>
  );
};

export default CollectionListItem;
