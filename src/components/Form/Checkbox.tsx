import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from '../Icon';
import { Box, Text } from '../Theme';

interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ label, value, onChange }: CheckboxProps) => {
  const handlePress = () => onChange(!value);

  return (
    <RectButton underlayColor="transparent" onPress={handlePress}>
      <Box flexDirection="row" alignItems="center">
        <Box
          width={20}
          height={20}
          borderRadius="s"
          alignItems="center"
          justifyContent="center"
          backgroundColor={value ? 'primary' : 'light'}
          marginRight="s"
        >
          {value && <Icon name="check" size={12} color="white" />}
        </Box>

        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
