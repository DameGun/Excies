import { Modal, View } from "react-native";
import { styles } from './styles.js';
import { useSelector } from "react-redux";

export default function CustomModal({ children }) {
    const { status } = useSelector(state => state.loading);
    const showModal = status == 'loading' || status == 'failed';

    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={showModal}
        >
            <View style={styles.centeredView}>
                <View style={status == 'loading' && styles.modalView}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}