import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomText } from 'src/components';
import { GUIDE_MAN_IMAGES } from 'src/constants';
import { usePersistContext } from 'src/hooks';

const BuildingProgressBar = () => {
  const { buildingTimestamp } = usePersistContext();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!buildingTimestamp) return;

    const { timestamp, totalDuration } = buildingTimestamp;

    const timer = setInterval(() => {
      const remaining = timestamp - Date.now();
      const next = totalDuration > 0 ? 1 - remaining / totalDuration : 0;
      const clampedProgress = Math.max(0, Math.min(next, 1));

      setProgress(clampedProgress);

      if (remaining <= 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [buildingTimestamp]);

  return (
    <View style={styles.container}>
      <Image
        source={GUIDE_MAN_IMAGES.brick_man}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.trackWrapper}>
        <View style={styles.track}>
          <CustomText style={styles.fillText}>In progress</CustomText>
          <View style={[styles.fill, { width: `${progress * 100}%` }]} />
        </View>
      </View>
    </View>
  );
};

export default BuildingProgressBar;
