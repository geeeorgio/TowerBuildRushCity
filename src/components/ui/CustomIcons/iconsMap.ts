import type { SvgProps } from 'react-native-svg';

import BackIcon from './BackIcon';
import ClockIcon from './ClockIcon';
import DownloadIcon from './DownloadIcon';
import InfoIcon from './InfoIcon';
import LeftArrIcon from './LeftArrIcon';
import RightArrIcon from './RightArrIcon';
import ShareIcon from './ShareIcon';

import type { IconName } from 'src/constants';

export const ICONS_MAP: Record<IconName, React.FC<SvgProps>> = {
  back: BackIcon,
  clock: ClockIcon,
  info: InfoIcon,
  leftArr: LeftArrIcon,
  rightArr: RightArrIcon,
  download: DownloadIcon,
  share: ShareIcon,
};
