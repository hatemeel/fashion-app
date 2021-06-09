import { CompositeNavigationProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Box, Button } from 'src/components';
import { AppRoutes, HomeRoutes } from 'src/shared';

interface OutfitIdeasProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<HomeRoutes, 'OutfitIdeas'>,
    StackNavigationProp<AppRoutes, 'Home'>
  >;
}

const OutfitIdeas = ({ navigation }: OutfitIdeasProps) => {
  return (
    <Box paddingTop="xl" marginTop="xl" alignItems="center">
      <Button onPress={() => navigation.replace('Authentication')}>Exit</Button>
    </Box>
  );
};

export default OutfitIdeas;
