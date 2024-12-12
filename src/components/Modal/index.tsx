import type { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';

type ModalProps = PropsWithChildren & {
  showModal: boolean;
};

export function CustomModal({ showModal, children }: ModalProps) {
  const styles = useStyles(getStyles);

  if (showModal) {
    return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    );
  }

  return null;
}
