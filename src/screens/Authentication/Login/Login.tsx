import React from 'react';
import { View } from 'react-native';
import { Box, Button, Container, Text } from 'src/components';
import SocialLogin from 'src/components/SocialLogin';
import { StackNavigationProps, Routes } from 'src/shared';

const Footer = () => (
  <>
    <Box paddingTop="xl" paddingBottom="m">
      <SocialLogin />
    </Box>

    <Box flexDirection="row" justifyContent="center">
      <Button variant="transparent">
        <Text color="white">
          Don't have an account? <Text color="primary">Sign Up here</Text>
        </Text>
      </Button>
    </Box>
  </>
);

const Login = ({ navigation }: StackNavigationProps<Routes, 'Onboarding'>) => {
  return (
    <Container footer={<Footer />}>
      <View></View>
    </Container>
  );
};

export default Login;
