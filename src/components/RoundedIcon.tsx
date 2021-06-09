import React from 'react';
import Icon, { IconName } from './Icon';
import { Theme, Box, Text } from './Theme';

export interface RoundedIconProps {
  name: IconName;
  size: number;
  iconSize?: number;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
}

const RoundedIcon = ({
  name,
  size,
  iconSize,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  iconSize = iconSize || size * 0.65;

  return (
    <Box
      width={size}
      height={size}
      backgroundColor={backgroundColor}
      alignItems="center"
      justifyContent="center"
      style={{ borderRadius: size / 2 }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
