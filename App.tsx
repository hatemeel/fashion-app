import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, Welcome } from './src/screens/Authentication';
import { LoadAssets } from './src/components';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/components';
import { Routes } from './src/shared';

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
  </AuthenticationStack.Navigator>
);

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
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
