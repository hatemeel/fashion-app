import React from 'react';
import { AuthenticationNavigator, HomeNavigator } from 'src/screens';
import { LoadAssets } from 'src/components';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from 'src/components/Theme';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from 'src/shared';

const fonts = {
  'sf-bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  'sf-semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
  'sf-medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
  'sf-regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
