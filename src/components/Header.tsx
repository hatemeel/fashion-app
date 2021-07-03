import React from 'react';
import { Box, Text, Theme, useTheme } from './Theme';
import Icon, { IconName } from './Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  left: {
    icon: IconName;
    onPress: () => void;
  };
  right: {
    icon: IconName;
    onPress: () => void;
  };
  variant?: 'dark' | 'light';
}

const ICON_SIZE = 22;

const Header = ({ title, left, right, variant = 'dark' }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const color: keyof Theme['colors'] =
    variant === 'dark' ? 'secondary' : 'white';

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
      style={{ marginTop: insets.top }}
    >
      <Icon
        name={left.icon}
        color={theme.colors[color]}
        size={ICON_SIZE}
        onPress={left.onPress}
      />

      <Text variant="header" textTransform="uppercase" color={color}>
        {title}
      </Text>

      <Icon
        name={right.icon}
        color={theme.colors[color]}
        size={ICON_SIZE}
        onPress={right.onPress}
      />
    </Box>
  );
};

export default Header;
