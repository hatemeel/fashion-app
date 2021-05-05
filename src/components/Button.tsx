import { useTheme } from '@shopify/restyle';
import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import theme, { Text, Theme } from './Theme';

interface ButtonProps {
  title: string;
  variant?: 'default' | 'primary';
  onPress: () => void;
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

const Button = ({ title, variant, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.light;
  const color = variant === 'primary' ? theme.colors.white : theme.colors.title;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.title, { color }]}>{title}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: 'default' };

export default Button;
