import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ShareIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 20" {...props}>
      <Path
        fill={props.color ?? COLORS.black}
        d="M15 20a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 12 17q0-.15.075-.7L5.05 12.2A2.97 2.97 0 0 1 3 13a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 0 10q0-1.25.875-2.125A2.9 2.9 0 0 1 3 7a2.96 2.96 0 0 1 2.05.8l7.025-4.1a1.7 1.7 0 0 1-.062-.337A5 5 0 0 1 12 3q0-1.25.875-2.125A2.9 2.9 0 0 1 15 0q1.25 0 2.125.875T18 3t-.875 2.125A2.9 2.9 0 0 1 15 6a2.96 2.96 0 0 1-2.05-.8L5.925 9.3q.05.176.063.338.014.164.012.362 0 .2-.012.363-.01.165-.063.337l7.025 4.1q.4-.375.925-.587A3 3 0 0 1 15 14q1.25 0 2.125.875T18 17t-.875 2.125A2.9 2.9 0 0 1 15 20"
      ></Path>
    </Svg>
  );
};

export default ShareIcon;
