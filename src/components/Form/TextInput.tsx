import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import theme, { Box } from '../Theme';
import Icon, { IconName } from '../Icon';
import { rgba } from 'src/shared';

interface TextInputProps {
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  icon?: IconName;
  validator?: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const ICON_SIZE = theme.borderRadii.m * 2;

const TextInput = ({ type, icon, placeholder, validator }: TextInputProps) => {
  const [input, setInput] = useState<string>('');
  const [dirty, setDirty] = useState<boolean>(false);
  const [state, setState] = useState<InputState>(Pristine);

  const color =
    state === Pristine ? 'darkGrey' : state === Valid ? 'primary' : 'danger';

  const handleChangeText = (text: string) => {
    setInput(text);
    !dirty && setDirty(true);
    state !== Pristine && handleBlur();
  };

  const handleBlur = () => {
    if (validator && dirty) {
      switch (validator(input)) {
        case Valid:
          setState(Valid);
          break;

        case Invalid:
          setState(Invalid);
          break;
      }
    }
  };

  const typeProps = ((): RNTextInputProps => {
    switch (type) {
      case 'email':
        return {
          keyboardType: 'email-address',
        };
      case 'password':
        return {
          secureTextEntry: true,
        };
      default:
        return {};
    }
  })();

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
      <Box paddingHorizontal="s">
        <Icon name={icon} size={16} color={theme.colors[color]} />
      </Box>

      <RNTextInput
        style={{ flex: 1 }}
        underlineColorAndroid="transparent"
        placeholderTextColor={rgba('#151624', 0.5)}
        value={input}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        {...{ placeholder, ...typeProps }}
      />

      {(state === Valid || state === Invalid) && (
        <Box
          borderRadius="m"
          width={ICON_SIZE}
          height={ICON_SIZE}
          backgroundColor={color}
          alignItems="center"
          justifyContent="center"
          marginHorizontal="s"
        >
          <Icon
            name={state === Valid ? 'check' : 'x'}
            size={10}
            color="white"
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
