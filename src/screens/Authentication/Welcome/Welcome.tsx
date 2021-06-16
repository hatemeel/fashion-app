import React from 'react';
import { Box, Button, Text, Link } from 'src/components';
import { AuthNavigationProps } from '../Navigator';

const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="slide.grey"
      ></Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="slide.grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        ></Box>

        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2" textAlign="center">
            Let's get started
          </Text>

          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>

          <Button
            variant="primary"
            onPress={() => navigation.navigate('Login')}
          >
            Have an account? Login
          </Button>
          <Button
            variant="default"
            onPress={() => navigation.navigate('SignUp')}
          >
            Join us, it's Free
          </Button>
          <Link
            onPress={() => navigation.navigate('ForgotPassword')}
            color="secondary"
          >
            Forgot password?
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
