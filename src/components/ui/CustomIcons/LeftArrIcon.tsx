import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const LeftArrIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 22 21" {...props}>
      <Path
        fill={props.color ?? COLORS.black}
        d="M19.747 8.927H4.621l6.608-6.608a1.365 1.365 0 0 0 0-1.923 1.35 1.35 0 0 0-1.909 0L.396 9.32a1.35 1.35 0 0 0 0 1.91l8.924 8.923a1.35 1.35 0 0 0 1.91-1.91L4.62 11.637h15.126c.745 0 1.354-.61 1.354-1.355 0-.744-.61-1.354-1.354-1.354"
      ></Path>
    </Svg>
  );
};

export default LeftArrIcon;
