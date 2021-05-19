import React from 'react';
import { AuthenticationNavigator } from 'src/screens/Authentication';
import { LoadAssets } from 'src/components';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from 'src/components/Theme';

const fonts = {
  'sf-bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  'sf-semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
  'sf-medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
  'sf-regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
