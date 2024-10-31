import { Controller, ControllerProps, FieldValues, Path } from 'react-hook-form';
import {
  Keyboard,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';

type CustomTextInputProps<
  TFieldNames extends FieldValues,
  TName extends Path<TFieldNames>,
> = TextInputProps & Omit<ControllerProps<TFieldNames, TName>, 'render'>;

export function CustomTextInput<TFieldNames extends FieldValues, TName extends Path<TFieldNames>>(
  props: CustomTextInputProps<TFieldNames, TName>
) {
  const styles = useStyles(getStyles);

  const onPress = () => Keyboard.dismiss();

  return (
    <Controller
      {...props}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View>
          <TouchableWithoutFeedback onPress={onPress} accessible={false}>
            <TextInput
              {...props}
              style={[styles.input, props.style]}
              placeholderTextColor={styles.placeholderColor.color}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.error}>{error?.message}</Text>
        </View>
      )}
    />
  );
}
