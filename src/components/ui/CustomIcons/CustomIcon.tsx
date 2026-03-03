import type { SvgProps } from 'react-native-svg';

import { ICONS_MAP } from './iconsMap';

import type { IconName } from 'src/constants';

interface CustomIconProps extends SvgProps {
  name: IconName;
}
const CustomIcon = ({ name, ...rest }: CustomIconProps) => {
  const IconComponent = ICONS_MAP[name];

  return <IconComponent {...rest} />;
};

export default CustomIcon;
