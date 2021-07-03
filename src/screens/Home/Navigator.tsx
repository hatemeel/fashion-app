import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { OutfitIdeas } from './OutfitIdeas';
import { AppRoutes, HomeRoutes } from 'src/shared';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerContent, DRAWER_WIDTH } from './DrawerContent';

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<HomeRoutes, RouteName>,
    StackNavigationProp<AppRoutes, 'Authentication'>
  >;
  route: RouteProp<HomeRoutes, RouteName>;
}

const Drawer = createDrawerNavigator<HomeRoutes>();

const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    drawerStyle={{ width: DRAWER_WIDTH }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);

export default HomeNavigator;
