import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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
  const backgroundColor = variant === 'primary' ? '#2cb9b0' : '#0c0d340d';
  const color = variant === 'primary' ? 'white' : '#0c0d34';

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
