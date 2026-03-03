import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const DownloadIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 14 17" {...props}>
      <Path
        fill={props.color ?? COLORS.black}
        d="M11.59 6H10V1c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v5H2.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M0 16c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1"
      ></Path>
    </Svg>
  );
};

export default DownloadIcon;
