import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ClockIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 22 22" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        fillRule="evenodd"
        d="M10.726 21.452a10.727 10.727 0 1 0 0-21.453 10.727 10.727 0 0 0 0 21.453m1.192-17.28a1.191 1.191 0 1 0-2.384 0v6.256c0 .822.668 1.49 1.49 1.49h3.873a1.192 1.192 0 1 0 0-2.384h-2.98z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};

export default ClockIcon;
