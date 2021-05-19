import React, { ReactNode } from 'react';
import { Dimensions, Image, StatusBar, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from './Theme';

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const { width } = Dimensions.get('window');
const aspectRatio = 250 / 375;
const height = width * aspectRatio;
const partHeight = height * 0.66;

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle="light-content" />

      <Box flex={1} backgroundColor="secondary">
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={partHeight}
          >
            <Image
              source={require('../../assets/patterns/bg-pattern-1.png')}
              style={{
                width,
                height,
              }}
            />
          </Box>
        </Box>

        <Box flex={1} overflow="hidden">
          <Image
            source={require('../../assets/patterns/bg-pattern-1.png')}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -partHeight,
            }}
          />

          <Box
            borderRadius="xl"
            borderTopLeftRadius="none"
            backgroundColor="white"
            flex={1}
          >
            {children}
          </Box>
        </Box>

        <Box backgroundColor="secondary">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </>
  );
};

export default Container;
