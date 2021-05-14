import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import theme, { Text } from './Theme';

interface ButtonProps {
  children: string | ReactNode;
  variant?: 'default' | 'primary' | 'transparent';
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: 'sf-regular',
    textAlign: 'center',
  },
});

const Button = ({ children, variant, onPress }: ButtonProps) => {
  const backgroundColor = (() => {
    switch (variant) {
      case 'transparent':
        return 'transparent';
      case 'primary':
        return theme.colors.primary;
      default:
        return theme.colors.light;
    }
  })();

  const color = (() => {
    switch (variant) {
      case 'primary':
        return theme.colors.white;
      default:
        return theme.colors.secondary;
    }
  })();

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {children}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: 'default' };

export default Button;
