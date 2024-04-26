import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        padding: 20,
    },
    listContainer: {
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    header: {
        color: props.colors.text,
        fontSize: 22,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    }
})