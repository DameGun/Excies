import { GestureResponderEvent, Pressable } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useCustomTheme } from '@/hooks/useCustomTheme';
import { PressableProps } from '@/types/pressable';

export function EditIcon({ onPress }: PressableProps<GestureResponderEvent>) {
  const { colors } = useCustomTheme();

  return (
    <Pressable onPress={onPress} style={{ marginRight: 20 }}>
      {({ pressed }) => (
        <Feather name='edit' size={24} color={pressed ? colors.primaryPressed : colors.primary} />
      )}
    </Pressable>
  );
}
