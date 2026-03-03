import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const BackIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 23 23" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M21.266 9.614H4.976l7.117-7.117a1.47 1.47 0 0 0 0-2.07 1.45 1.45 0 0 0-2.056 0l-9.61 9.61a1.453 1.453 0 0 0 0 2.056l9.61 9.61a1.453 1.453 0 1 0 2.056-2.056l-7.117-7.116h16.29c.802 0 1.458-.657 1.458-1.459s-.656-1.458-1.458-1.458"
      ></Path>
    </Svg>
  );
};

export default BackIcon;
