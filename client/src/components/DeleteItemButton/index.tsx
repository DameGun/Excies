import { useStyles } from '@/hooks/useStyles';
import { PressableProps } from '@/types/pressable';

import { getStyles } from './styles';

import { CustomButton } from '../Button';

export function DeleteItemButton({ onPress }: PressableProps) {
  const styles = useStyles(getStyles);

  return (
    <CustomButton
      textStyle={styles.deleteButtonText}
      buttonStyle={styles.deleteButton}
      iconName='trash-can-outline'
      iconStyle={styles.icon}
      onPress={onPress}
    >
      Delete
    </CustomButton>
  );
}
