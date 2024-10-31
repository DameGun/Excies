import { PropsWithChildren } from 'react';
import { Modal, View } from 'react-native';

import { styles } from './styles';

type ModalProps = PropsWithChildren & {
  showModal: boolean;
};

export function CustomModal({ showModal, children }: ModalProps) {
  return (
    <Modal animationType='fade' transparent={true} visible={showModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
}
