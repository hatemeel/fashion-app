import React from 'react';
import { Box, Button } from 'src/components';
import { HomeNavigationProps } from '../Navigator';

const OutfitIdeas = ({ navigation }: HomeNavigationProps<'OutfitIdeas'>) => {
  return (
    <Box paddingTop="xl" marginTop="xl" alignItems="center">
      <Button onPress={() => navigation.replace('Authentication')}>Exit</Button>
    </Box>
  );
};

export default OutfitIdeas;
