import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from './src/screens/Authentication';
import { LoadAssets } from './src/components';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
);

const fonts = {
  'sf-bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  'sf-semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
  'sf-regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
