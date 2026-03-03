import type { ViewProps } from 'react-native';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

import { COLORS } from 'src/constants';

interface CustomContainerProps extends ViewProps {
  variant?: 'regular' | 'gradient';
  colorVariant?: 'lightBlue' | 'darkBlue' | 'green' | 'red' | 'yellow';
}

const CustomContainer = ({
  style,
  variant = 'regular',
  colorVariant = 'yellow',
  ...rest
}: CustomContainerProps) => {
  if (variant === 'gradient') {
    return (
      <LinearGradient
        colors={COLORS.blue_gradient}
        style={[styles.gradient, style]}
        {...rest}
      />
    );
  }

  return <View style={[styles[colorVariant], style]} {...rest} />;
};

export default CustomContainer;
