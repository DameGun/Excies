import { GestureResponderEvent, Pressable } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useStyles } from '@/hooks/useStyles';
import { PressableProps } from '@/types/pressable';

import { getStyles } from './styles';

export function EditIcon({ onPress }: PressableProps<GestureResponderEvent>) {
  const styles = useStyles(getStyles);

  return (
    <Pressable onPress={onPress} style={styles.editButton}>
      {({ pressed }) => (
        <MaterialCommunityIcons name='playlist-edit' style={styles.editIcon(pressed)} />
      )}
    </Pressable>
  );
}
