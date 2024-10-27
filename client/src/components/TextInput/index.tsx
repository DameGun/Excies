import { Keyboard, TextInput, TextInputProps, TouchableWithoutFeedback } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';

export function CustomTextInput(props: TextInputProps) {
  const styles = useStyles(getStyles);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <TextInput
        {...props}
        style={[styles.input, props.style]}
        placeholderTextColor={styles.placeholderColor.color}
      />
    </TouchableWithoutFeedback>
  );
}
