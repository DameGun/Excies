import { useTranslation } from 'react-i18next';

import { Icons } from '@/constants/icons';
import { useStyles } from '@/hooks/useStyles';
import type { PressableProps } from '@/types/pressable';

import { getStyles } from './styles';

import { CustomButton } from '../Button';

export function DeleteItemButton({ onPress }: PressableProps) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

  return (
    <CustomButton
      textStyle={styles.deleteButtonText}
      buttonStyle={styles.deleteButton}
      iconName={Icons.Delete}
      iconStyle={styles.icon}
      onPress={onPress}
    >
      {t('modal.deleteButton')}
    </CustomButton>
  );
}
