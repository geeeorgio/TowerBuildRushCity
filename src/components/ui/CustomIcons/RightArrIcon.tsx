import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const RightArrIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 22 21" {...props}>
      <Path
        fill={props.color ?? COLORS.black}
        d="M1.354 8.927H16.48L9.872 2.32a1.365 1.365 0 0 1 0-1.923 1.35 1.35 0 0 1 1.91 0l8.923 8.924a1.35 1.35 0 0 1 0 1.91l-8.924 8.923a1.35 1.35 0 1 1-1.909-1.91l6.608-6.607H1.354C.61 11.636 0 11.026 0 10.28c0-.744.61-1.354 1.354-1.354"
      ></Path>
    </Svg>
  );
};

export default RightArrIcon;
