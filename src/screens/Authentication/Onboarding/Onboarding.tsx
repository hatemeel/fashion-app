import React, { useRef } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Slide, { SLIDE_HEIGHT } from './Slide';
import Subslide from './Subslide';

const BORDER_RADIUS = 75;
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: '#bfeaf5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#beecc4',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#ffe4d9',
  },
  {
    title: 'Funky',
    subtitle: 'Look Great, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#ffdddd',
  },
];

const Onboarding = () => {
  const scrollRef = useRef<any>(null);
  const x = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const sliderAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        x.value,
        slides.map((_, i) => i * width),
        slides.map(({ color }) => color)
      ),
    };
  });

  const sliderTailAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        x.value,
        slides.map((_, i) => i * width),
        slides.map(({ color }) => color)
      ),
    };
  });

  const subSlideAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -x.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, sliderAnimatedStyle]}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          decelerationRate="fast"
          scrollEventThrottle={1}
          onScroll={scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View
          style={[
            { ...StyleSheet.absoluteFillObject },
            sliderTailAnimatedStyle,
          ]}
        />

        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
            },
            subSlideAnimatedStyle,
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              onPress={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
              {...{ subtitle, description }}
              last={index === slides.length - 1}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
