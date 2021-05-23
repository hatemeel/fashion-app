import React, { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { Box, useTheme } from '../Theme';
import Icon, { IconName } from '../Icon';
import { rgba } from 'src/shared';
interface TextInputProps extends RNTextInputProps {
  type: 'text' | 'email' | 'password';
  icon?: IconName;
  error?: string;
  touched?: boolean;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ type, icon, error, touched, ...props }, ref) => {
    const theme = useTheme();
    const ICON_SIZE = theme.borderRadii.m * 2;

    const color = !touched ? 'darkGrey' : !error ? 'primary' : 'danger';
    const placeholderTextColor = !touched
      ? rgba('#151624', 0.5)
      : !error
      ? rgba('#151624', 0.5)
      : theme.colors.danger;

    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={color}
        paddingHorizontal="s"
      >
        {icon && (
          <Box paddingHorizontal="s">
            <Icon name={icon} size={16} color={theme.colors[color]} />
          </Box>
        )}

        <RNTextInput
          style={{ flex: 1, height: 48 }}
          underlineColorAndroid="transparent"
          {...{ ref, placeholderTextColor, ...props }}
        />

        {touched && (
          <Box
            borderRadius="m"
            width={ICON_SIZE}
            height={ICON_SIZE}
            backgroundColor={color}
            alignItems="center"
            justifyContent="center"
            marginLeft="s"
          >
            <Icon name={!error ? 'check' : 'x'} size={10} color="white" />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
