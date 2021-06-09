import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from '../Icon';
import Link from '../Link';
import { Box } from '../Theme';

interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ label, value, onChange }: CheckboxProps) => {
  const handlePress = () => onChange(!value);

  return (
    <Box flexDirection="row" alignItems="center">
      <BorderlessButton activeOpacity={1} onPress={handlePress}>
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
      </BorderlessButton>

      <Link onPress={handlePress} color="secondary">
        {label}
      </Link>
    </Box>
  );
};

export default Checkbox;
