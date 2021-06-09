import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Text, TextInput } from 'src/components';
import { Footer } from '../components';
import { StackNavigationProps, AuthenticationRoutes } from 'src/shared';
import { ForgotPasswordInitialValuesProps } from 'src/shared/models/forgotPassword.model';
import { Linking } from 'react-native';

const forgotPasswordInitialValues: ForgotPasswordInitialValuesProps = {
  email: '',
};

const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, 'ForgotPassword'>) => {
  const handleResetPassword = (values: ForgotPasswordInitialValuesProps) => {
    console.log(values);

    navigation.replace('PasswordChanged');
  };

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: forgotPasswordInitialValues,
      validationSchema: forgotPasswordValidationSchema,
      onSubmit: handleResetPassword,
    });

  const footer = (
    <Footer
      title="Don’t work?"
      action="Try another way"
      onPress={() => Linking.openURL('mailto:help@support.com')}
    />
  );

  return (
    <Container pattern={2} {...{ footer }}>
      <Box padding="xl" flex={1} justifyContent="center">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot password?
        </Text>

        <Box maxWidth={255} alignSelf="center" marginBottom="xl">
          <Text variant="body" color="grey" textAlign="center">
            Enter the email address associated with your account
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
            returnKeyType="done"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>

        <Box alignItems="center" marginTop="m" marginBottom="m">
          <Button variant="primary" onPress={handleSubmit}>
            Reset password
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
