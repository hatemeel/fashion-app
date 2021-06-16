import React from 'react';
import {
  Box,
  Button,
  Container,
  RoundedIcon,
  RoundedIconButton,
  Text,
} from 'src/components';
import { AuthNavigationProps } from '../Navigator';

const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<'PasswordChanged'>) => {
  const footer = (
    <Box paddingTop="xl" paddingBottom="l" alignItems="center">
      <RoundedIconButton
        name="x"
        size={60}
        backgroundColor="white"
        color="secondary"
        onPress={() => navigation.pop()}
      />
    </Box>
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl" flex={1} justifyContent="center" alignItems="center">
        <Box marginBottom="l">
          <RoundedIcon
            name="check"
            size={80}
            iconSize={32}
            backgroundColor="primaryLight"
            color="primary"
          />
        </Box>

        <Text
          variant="title1"
          marginTop="s"
          textAlign="center"
          marginBottom="m"
        >
          Your password was successfully changed
        </Text>

        <Text variant="body" color="grey" textAlign="center" marginBottom="xl">
          Close this window and login again
        </Text>

        <Button variant="primary" onPress={() => navigation.pop()}>
          Login again
        </Button>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
