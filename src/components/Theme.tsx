import { createBox, createText, createTheme } from '@shopify/restyle';
import { rgba } from 'src/shared';

const palette = {
  primary: '#2cb9b0',
  secondary: '#0c0d34',
  text: rgba('#0c0d34', 0.7),
  grey: rgba('#0c0d34', 0.05),
  'slide.grey': '#f4f0ef',
  white: 'white',
};

const theme = createTheme({
  colors: {
    ...palette,
  },
  spacing: {
    none: 0,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    none: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'sf-bold',
      color: 'white',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'sf-semibold',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'sf-semibold',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'sf-regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: 'sf-medium',
      color: 'text',
    },
  },
});

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export default theme;
