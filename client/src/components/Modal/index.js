import { Modal, View } from "react-native";
import { styles } from './styles.js';

export default function CustomModal({ showModal, children }) {
    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={showModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}