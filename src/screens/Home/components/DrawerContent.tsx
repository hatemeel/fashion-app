import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Box } from 'src/components';
import { DrawerMenuItem, randomKey } from 'src/shared';
import DrawerItem from './DrawerItem';

const { width, height: wHeight } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 1;
const aspectRatio = 250 / 375;
const height = DRAWER_WIDTH * aspectRatio;
const partHeight = height * 0.5;
const bgPattern = require('../../../../assets/patterns/bg-pattern-1.png');

const menuItems: DrawerMenuItem[] = [
  {
    icon: 'zap',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: '#2CB9B0',
  },
  {
    icon: 'heart',
    label: 'Favorite Outfits',
    screen: 'OutfitIdeas',
    color: '#FE5E33',
  },
  {
    icon: 'user',
    label: 'Edit Profile',
    screen: 'OutfitIdeas',
    color: '#FFC641',
  },
  {
    icon: 'clock',
    label: 'Transaction History',
    screen: 'OutfitIdeas',
    color: '#FF87A2',
  },
  {
    icon: 'settings',
    label: 'Notifications Settings',
    screen: 'OutfitIdeas',
    color: '#442CB9',
  },
  {
    icon: 'corner-up-left',
    label: 'Logout',
    screen: 'Logout',
    color: '#0C0D34',
  },
];

const DrawerContent =
  ({}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
      <Box flex={1}>
        <Box height={partHeight} backgroundColor="white">
          <Box
            style={StyleSheet.absoluteFillObject}
            backgroundColor="secondary"
            borderBottomRightRadius="xl"
          />
        </Box>

        <Box flex={1} backgroundColor="white">
          <Box
            overflow="hidden"
            height={height}
            backgroundColor="grey"
            position="absolute"
            top={wHeight - partHeight * 3}
          >
            <Image
              source={bgPattern}
              style={{
                width: DRAWER_WIDTH,
                height,
              }}
            />
          </Box>

          <Box flex={1} backgroundColor="secondary" />
          <Box flex={1} backgroundColor="primary" />

          <Box
            style={{ ...StyleSheet.absoluteFillObject, paddingHorizontal: 35 }}
            backgroundColor="white"
            borderTopLeftRadius="xl"
            borderBottomRightRadius="xl"
          >
            {menuItems.map((props, index) => (
              <DrawerItem key={randomKey()} {...props} isFirst={!!index} />
            ))}
          </Box>
        </Box>

        <Box backgroundColor="white">
          <Box borderTopLeftRadius="xl" overflow="hidden" height={partHeight}>
            <Image
              source={bgPattern}
              style={{
                width: DRAWER_WIDTH,
                height,
                position: 'absolute',
                bottom: 0,
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  };

export default DrawerContent;
