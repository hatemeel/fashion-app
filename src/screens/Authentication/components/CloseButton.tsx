import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Box, Icon, Text } from 'src/components';

interface CloseButtonProps {
  onPress?: () => void;
}

const SIZE = 60;

const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box
        style={{ width: SIZE, height: SIZE, borderRadius: SIZE / 2 }}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="secondary">
          <Icon name="x" size={30} />
        </Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default CloseButton;
