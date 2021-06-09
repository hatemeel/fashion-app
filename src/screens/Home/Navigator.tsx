import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { OutfitIdeas } from './OutfitIdeas';
import { HomeRoutes } from 'src/shared';

const Drawer = createDrawerNavigator<HomeRoutes>();

const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);

export default HomeNavigator;
