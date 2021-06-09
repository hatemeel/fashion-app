import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Box, Text } from 'src/components';
import SocialLogin from './SocialLogin';

interface FooterProps {
  title: string;
  action: string;
  onPress: () => void;
}

const Footer = ({ title, action, onPress }: FooterProps) => (
  <>
    <Box paddingTop="xl" paddingBottom="m">
      <SocialLogin />
    </Box>

    <Box flexDirection="row" justifyContent="center">
      <BorderlessButton {...{ onPress }}>
        <Text color="white" variant="button">
          {title} <Text color="primary">{action}</Text>
        </Text>
      </BorderlessButton>
    </Box>
  </>
);

export default Footer;
