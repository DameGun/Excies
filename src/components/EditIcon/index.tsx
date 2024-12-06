import type { GestureResponderEvent } from 'react-native';
import { Pressable } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Icons } from '@/constants/icons';
import { useStyles } from '@/hooks/useStyles';
import type { PressableProps } from '@/types/pressable';

import { getStyles } from './styles';

export function EditIcon({ onPress }: PressableProps<GestureResponderEvent>) {
  const styles = useStyles(getStyles);

  return (
    <Pressable onPress={onPress} style={styles.editButton}>
      {({ pressed }) => (
        <MaterialCommunityIcons name={Icons.Edit} style={styles.editIcon(pressed)} />
      )}
    </Pressable>
  );
}
