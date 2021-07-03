import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Box, Text, Header } from 'src/components';
import { DrawerMenuItem, randomKey } from 'src/shared';
import DrawerItem from './DrawerItem';

const { width, height: wHeight } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 1;
const HEADER_HEIGHT = 150;
const aspectRatio = 250 / 375;
const height = DRAWER_WIDTH * aspectRatio;
const partHeight = 90;
const bgPattern = require('../../../../assets/patterns/drawer-pattern.png');

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

const DrawerContent = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const userData = {
    imageURL: 'https://bit.ly/3dC1M7e',
  };

  return (
    <Box flex={1}>
      <Box height={HEADER_HEIGHT} backgroundColor="white">
        <Box
          style={StyleSheet.absoluteFillObject}
          backgroundColor="secondary"
          borderBottomRightRadius="xl"
        >
          <Header
            title="my profile"
            left={{
              icon: 'x',
              onPress: navigation.closeDrawer,
            }}
            right={{
              icon: 'shopping-bag',
              onPress: () => {},
            }}
            variant="light"
          />
        </Box>
      </Box>

      <Box flex={1} backgroundColor="white" zIndex={99}>
        <Box
          overflow="hidden"
          width={DRAWER_WIDTH}
          height={partHeight}
          backgroundColor="grey"
          position="absolute"
          top={wHeight - HEADER_HEIGHT - partHeight * 2}
          zIndex={1}
        >
          <Image
            source={bgPattern}
            style={{
              width: DRAWER_WIDTH,
              height,
              bottom: height - partHeight * 2,
            }}
          />
        </Box>

        <Box flex={1} backgroundColor="secondary" />

        <Box
          style={{ ...StyleSheet.absoluteFillObject, paddingHorizontal: 35 }}
          zIndex={2}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
        >
          <Box
            backgroundColor={userData.imageURL ? 'white' : 'primary'}
            width={100}
            height={100}
            alignSelf="center"
            overflow="hidden"
            marginBottom="m"
            style={{
              borderRadius: 50,
              marginTop: -50,
            }}
          >
            <Image
              source={{
                uri: userData.imageURL,
                width: 100,
                height: 100,
              }}
            />
          </Box>

          <Box marginVertical="m">
            <Text variant="title1" textAlign="center" marginBottom="xs">
              Mike Peter
            </Text>

            <Text variant="body" textAlign="center">
              mike@flexinstudio.com
            </Text>
          </Box>

          <Box marginTop="m">
            {menuItems.map((props, index) => (
              <DrawerItem key={randomKey()} {...props} isFirst={!index} />
            ))}
          </Box>
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
