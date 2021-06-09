import React, { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Text, Theme } from './Theme';

interface LinkProps {
  children: ReactNode;
  color?: keyof Theme['colors'];
  onPress: () => void;
}

const Link = ({ children, color, onPress }: LinkProps) => {
  return (
    <BorderlessButton {...{ onPress }}>
      <Text variant="button" color={color || 'primary'}>
        {children}
      </Text>
    </BorderlessButton>
  );
};

export default Link;
