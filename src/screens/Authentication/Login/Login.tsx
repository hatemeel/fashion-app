import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Link,
  Text,
  TextInput,
} from 'src/components';
import { Footer } from '../components';
import { StackNavigationProps, Routes } from 'src/shared';
import { LoginInitialValuesProps } from 'src/shared/models/login.model';

const loginInitialValues: LoginInitialValuesProps = {
  email: '',
  password: '',
  remember: true,
};

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  remember: Yup.boolean(),
});

const Login = ({ navigation }: StackNavigationProps<Routes, 'Login'>) => {
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

  const passwordInput = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.replace('SignUp')}
    />
  );

  return (
    <Container pattern={0} {...{ footer }}>
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
            autoCapitalize="none"
            autoCompleteType="email"
            returnKeyType="next"
            onSubmitEditing={() => passwordInput.current?.focus()}
          />
        </Box>

        <Box marginBottom="m">
          <TextInput
            ref={passwordInput}
            type="password"
            icon="lock"
            placeholder="Enter your Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            secureTextEntry={true}
            autoCompleteType="password"
            returnKeyType="done"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="m"
        >
          <Checkbox
            label="Remember me"
            value={values.remember}
            onChange={(value) => setFieldValue('remember', value)}
          />

          <Link onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot password
          </Link>
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
