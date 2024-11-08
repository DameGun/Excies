import { PropsWithChildren } from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import { PressableProps } from '@/types/pressable';

import { getStyles } from './styles';

type CustomButtonProps = PressableProps<GestureResponderEvent> &
  PropsWithChildren & {
    disabled?: boolean;
  };

export function CustomHeaderButton({ onPress, children, disabled = false }: CustomButtonProps) {
  const styles = useStyles(getStyles);

  return (
    <Pressable disabled={disabled} style={styles.button(disabled)} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}
