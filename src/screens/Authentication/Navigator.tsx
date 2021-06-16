import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { AppRoutes, AuthenticationRoutes } from 'src/shared';
import Onboarding from './Onboarding';
import Welcome from './Welcome';
import Login from './Login';
import { SignUp } from './SignUp';
import { ForgotPassword } from './ForgotPassword';
import { PasswordChanged } from './PasswordChanged';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    StackNavigationProp<AppRoutes, 'Home'>
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
    <AuthenticationStack.Screen name="SignUp" component={SignUp} />
    <AuthenticationStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
    />
    <AuthenticationStack.Screen
      name="PasswordChanged"
      component={PasswordChanged}
    />
  </AuthenticationStack.Navigator>
);

export default AuthenticationNavigator;
