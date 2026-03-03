import type { TextProps } from 'react-native';
import { Text } from 'react-native';

import { styles } from './styles';

const CustomText = ({ style, ...rest }: TextProps) => {
  return <Text style={[styles.default, style]} {...rest} />;
};

export default CustomText;
