import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Text, TextInput } from 'src/components';
import { Footer } from '../components';
import { StackNavigationProps, Routes } from 'src/shared';
import { SignUpInitialValuesProps } from 'src/shared/models/signUp.model';

const signUpInitialValues: SignUpInitialValuesProps = {
  email: '',
  password: '',
  confirmPassword: '',
};

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  confirmPassword: Yup.string()
    .equals([Yup.ref('password')], "Passwords don't match")
    .required('Required'),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, 'SignUp'>) => {
  const handleSignUp = (values: SignUpInitialValuesProps) => {
    console.log(values);
  };

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: signUpInitialValues,
      validationSchema: signUpValidationSchema,
      onSubmit: handleSignUp,
    });

  const passwordInput = useRef<RNTextInput>(null);
  const confirmPasswordInput = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate('Login')}
    />
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>

        <Box maxWidth={255} alignSelf="center" marginBottom="xl">
          <Text variant="body" color="grey" textAlign="center">
            Let’s us know what your name, email, and your password
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
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordInput.current?.focus()}
          />
        </Box>

        <Box marginBottom="m">
          <TextInput
            ref={confirmPasswordInput}
            type="password"
            icon="lock"
            placeholder="Confirm password"
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            secureTextEntry={true}
            autoCompleteType="password"
            returnKeyType="done"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>

        <Box alignItems="center" marginTop="m">
          <Button variant="primary" onPress={handleSubmit}>
            Create your account
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
