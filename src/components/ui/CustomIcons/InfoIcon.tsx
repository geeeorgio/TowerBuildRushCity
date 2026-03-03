import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const InfoIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 30 30" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M16.042 10.208h-2.917V7.292h2.917m0 14.583h-2.917v-8.75h2.917M14.583 0a14.583 14.583 0 1 0 0 29.167 14.583 14.583 0 0 0 0-29.167"
      ></Path>
    </Svg>
  );
};

export default InfoIcon;
