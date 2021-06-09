import React, { ReactNode } from 'react';
import { Dimensions, Image, Platform, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from './Theme';

interface ContainerProps {
  children: ReactNode;
  footer: JSX.Element;
  pattern: 0 | 1 | 2;
}

const { width, height: windowHeight } = Dimensions.get('window');
const aspectRatio = 250 / 375;
const height = width * aspectRatio;
const partHeight = height * 0.66;

const bgPatterns = [
  require('../../assets/patterns/bg-pattern-1.png'),
  require('../../assets/patterns/bg-pattern-2.png'),
  require('../../assets/patterns/bg-pattern-3.png'),
];

const Container = ({ children, footer, pattern }: ContainerProps) => {
  const insets = useSafeAreaInsets();

  const bgPattern = bgPatterns[pattern];

  return (
    <>
      <StatusBar style="light" />

      <KeyboardAwareScrollView scrollEnabled={false}>
        <Box
          height={
            windowHeight +
            (Platform.OS === 'android' ? Constants.statusBarHeight : 0)
          }
          backgroundColor="secondary"
        >
          <Box backgroundColor="white">
            <Box
              borderBottomLeftRadius="xl"
              overflow="hidden"
              height={partHeight}
            >
              <Image
                source={bgPattern}
                style={{
                  width,
                  height,
                }}
              />
            </Box>
          </Box>

          <Box flex={1} overflow="hidden">
            <Image
              source={bgPattern}
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
      </KeyboardAwareScrollView>
    </>
  );
};

export default Container;
