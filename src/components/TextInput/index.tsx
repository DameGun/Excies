import type { ControllerProps, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { TextInputProps } from 'react-native';
import { Text, TextInput, View } from 'react-native';

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

  return (
    <Controller
      {...props}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View>
          <TextInput
            {...props}
            style={[styles.input, props.style]}
            placeholderTextColor={styles.placeholderColor.color}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value ? `${value}` : ''}
          />
          <Text style={styles.error}>{error?.message}</Text>
        </View>
      )}
    />
  );
}
