import { PropsWithChildren } from 'react';
import { Modal, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';

type ModalProps = PropsWithChildren & {
  showModal: boolean;
};

export function CustomModal({ showModal, children }: ModalProps) {
  const styles = useStyles(getStyles);

  return (
    <Modal animationType='fade' transparent={true} visible={showModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
}
