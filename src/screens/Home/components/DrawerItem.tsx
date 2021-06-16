import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { DrawerMenuItem, HomeRoutes } from 'src/shared';
import { Box, RoundedIcon, Text } from 'src/components';
import { useNavigation } from '@react-navigation/native';

interface DrawerItemProps extends DrawerMenuItem {
  isFirst: boolean;
}

const DrawerItem = ({
  isFirst,
  icon,
  color,
  label,
  screen,
}: DrawerItemProps) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    if (screen !== 'Logout') {
      navigation.navigate<keyof HomeRoutes>(screen);
    } else {
      navigation.navigate('Authentication');
    }
  };

  return (
    <BorderlessButton
      style={{ marginTop: isFirst ? 24 : 0 }}
      onPress={pressHandler}
    >
      <Box flexDirection="row" alignItems="center">
        <RoundedIcon
          name={icon}
          size={36}
          iconSize={18}
          backgroundColor={color}
          color="white"
        />

        <Box marginLeft="m">
          <Text variant="body">{label}</Text>
        </Box>
      </Box>
    </BorderlessButton>
  );
};

export default DrawerItem;
