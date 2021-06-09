import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
      <TouchableWithoutFeedback {...{ onPress }}>
        <Text color="white" variant="button">
          {title} <Text color="primary">{action}</Text>
        </Text>
      </TouchableWithoutFeedback>
    </Box>
  </>
);

export default Footer;
