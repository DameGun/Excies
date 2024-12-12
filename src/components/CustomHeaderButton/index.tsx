import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import type { GestureResponderEvent } from 'react-native';
import { Pressable, Text } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import type { PressableProps } from '@/types/pressable';

import { getStyles } from './styles';

type CustomButtonProps = PressableProps<GestureResponderEvent> &
  PropsWithChildren & {
    disabled?: boolean;
  };

export function CustomHeaderButton({ onPress, children, disabled = false }: CustomButtonProps) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

  return (
    <Pressable disabled={disabled} style={styles.button(disabled)} onPress={onPress}>
      <Text style={styles.buttonText}>{children ?? t('modal.headerRightButton')}</Text>
    </Pressable>
  );
}
