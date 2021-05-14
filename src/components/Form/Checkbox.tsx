import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from '../Icon';
import { Box, Text } from '../Theme';

interface CheckboxProps {
  label: string;
  checked?: boolean;
}

const Checkbox = ({ label, checked: checkedByDefault }: CheckboxProps) => {
  const [checked, setChecked] = useState(checkedByDefault);

  const handlePress = () => setChecked((prevState) => !prevState);

  return (
    <RectButton underlayColor="transparent" onPress={handlePress}>
      <Box flexDirection="row" alignItems="center">
        <Box
          width={20}
          height={20}
          borderRadius="s"
          alignItems="center"
          justifyContent="center"
          backgroundColor={checked ? 'primary' : 'light'}
          marginRight="s"
        >
          {checked && <Icon name="check" size={12} color="white" />}
        </Box>

        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
