import { PropsWithChildren, ReactNode } from 'react';
import { Keyboard, Pressable, StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import { PressableProps } from '@/types/pressable';
import { StyleProps } from '@/types/styles';

import { getStyles } from './styles';

type CustomButtonProps = StyleProps<'text' | 'button'> &
  PropsWithChildren &
  PressableProps & {
    type?: 'submit';
    iconComponent?: ReactNode;
    disabled?: boolean;
  };

export function CustomButton({
  type,
  children,
  textStyle,
  buttonStyle,
  onPress,
  iconComponent,
  disabled,
}: CustomButtonProps) {
  const customStyles = useStyles(getStyles);

  const handlePress = () => {
    if (type === 'submit') {
      Keyboard.dismiss();
    }
    onPress();
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
        },
        customStyles.button,
        buttonStyle,
      ]}
      onPress={handlePress}
      disabled={disabled}
    >
      <View
        style={{ ...customStyles.buttonContainer, flexDirection: iconComponent ? 'row' : 'column' }}
      >
        {iconComponent}
        {children && <Text style={[customStyles.text, textStyle]}>{children}</Text>}
      </View>
    </Pressable>
  );
}
