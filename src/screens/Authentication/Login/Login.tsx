import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  SocialLogin,
  Text,
  TextInput,
} from 'src/components';
import { StackNavigationProps, Routes } from 'src/shared';
import isEmail from 'validator/lib/isEmail';

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

const emailValidator = isEmail;

const passwordValidator = (password: string): boolean =>
  !!password && password.length >= 8;

const Login = ({ navigation }: StackNavigationProps<Routes, 'Onboarding'>) => {
  return (
    <Container footer={<Footer />}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>

        <Box maxWidth={255} alignSelf="center" marginBottom="xl">
          <Text variant="body" color="grey" textAlign="center">
            Use your credentials below and login to your account
          </Text>
        </Box>

        <Box marginBottom="m">
          <TextInput
            type="email"
            icon="mail"
            placeholder="Enter your Email"
            validator={emailValidator}
          />
        </Box>

        <Box>
          <TextInput
            type="password"
            icon="lock"
            placeholder="Enter your Password"
            validator={passwordValidator}
          />
        </Box>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox label="Remember me" />

          <Button variant="transparent">
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>

        <Box alignItems="center" marginTop="m">
          <Button variant="primary">Log into your account</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
