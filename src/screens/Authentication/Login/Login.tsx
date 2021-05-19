import { Formik, useFormik } from 'formik';
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
import { LoginInitialValuesProps } from 'src/shared/models/login.model';
import * as Yup from 'yup';

const loginInitialValues: LoginInitialValuesProps = {
  email: '',
  password: '',
  remember: false,
};

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  remember: Yup.boolean(),
});

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
  const handleLogin = (values: LoginInitialValuesProps) => {
    console.log(values);
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: handleLogin,
  });

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
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            keyboardType="email-address"
          />
        </Box>

        <Box>
          <TextInput
            type="password"
            icon="lock"
            placeholder="Enter your Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            secureTextEntry={true}
          />
        </Box>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox
            label="Remember me"
            value={values.remember}
            onChange={(value) => setFieldValue('remember', value)}
          />

          <Button variant="transparent">
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>

        <Box alignItems="center" marginTop="m">
          <Button variant="primary" onPress={handleSubmit}>
            Log into your account
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
