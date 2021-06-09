import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Button, Container, Icon, Text } from 'src/components';
import { StackNavigationProps, Routes } from 'src/shared';
import { CloseButton } from '../components';

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, 'PasswordChanged'>) => {
  const footer = (
    <Box
      paddingTop="xl"
      paddingBottom="l"
      alignItems="center"
      backgroundColor=""
    >
      <CloseButton onPress={() => navigation.navigate('Login')} />
    </Box>
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl" flex={1} justifyContent="center" alignItems="center">
        <Box
          style={{ width: SIZE, height: SIZE, borderRadius: SIZE / 2 }}
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="l"
        >
          <Box
            style={{ ...StyleSheet.absoluteFillObject }}
            backgroundColor="primary"
            opacity={0.1}
          />

          <Text color="primary">
            <Icon name="check" size={32} />
          </Text>
        </Box>

        <Text variant="title1" marginTop="s" marginBottom="m">
          Your password was successfully changed
        </Text>

        <Text variant="body" color="grey" textAlign="center" marginBottom="xl">
          Close this window and login again
        </Text>

        <Button variant="primary" onPress={() => navigation.navigate('Login')}>
          Login again
        </Button>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
