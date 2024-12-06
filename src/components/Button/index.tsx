import type { PropsWithChildren } from 'react';
import { Keyboard, Pressable, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useStyles } from '@/hooks/useStyles';
import type { IconNames } from '@/types/icons';
import type { PressableProps } from '@/types/pressable';
import type { StyleProps } from '@/types/styles';

import { getStyles } from './styles';

type CustomButtonProps = StyleProps<'text' | 'button' | 'icon'> &
  PropsWithChildren &
  PressableProps & {
    type?: 'submit';
    iconName?: IconNames;
    disabled?: boolean;
  };

export function CustomButton({
  type,
  children,
  textStyle,
  buttonStyle,
  onPress,
  iconName,
  iconStyle,
  disabled,
}: CustomButtonProps) {
  const styles = useStyles(getStyles);

  const handlePress = () => {
    if (type === 'submit') {
      Keyboard.dismiss();
    }
    onPress?.();
  };

  return (
    <Pressable
      style={styles.button(disabled, buttonStyle)}
      onPress={handlePress}
      disabled={disabled}
    >
      <View style={styles.buttonContainer(Boolean(iconName))}>
        {iconName && <MaterialCommunityIcons name={iconName} style={iconStyle} />}
        {children && <Text style={[styles.text, textStyle]}>{children}</Text>}
      </View>
    </Pressable>
  );
}
