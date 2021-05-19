import React from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useTheme } from './Theme';

interface PaginationDotProps {
  index: number;
  x: Animated.SharedValue<number>;
}

const { width } = Dimensions.get('window');

const PaginationDot = ({ index, x }: PaginationDotProps) => {
  const theme = useTheme();

  const dotAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        x.value / width,
        [index - 1, index, index + 1],
        [0.5, 1, 0.5],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          scale: interpolate(
            x.value / width,
            [index - 1, index, index + 1],
            [1, 1.25, 1],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: theme.colors.primary,
          width: 8,
          height: 8,
          borderRadius: 4,
          margin: 4,
        },
        dotAnimatedStyle,
      ]}
    ></Animated.View>
  );
};

export default PaginationDot;
