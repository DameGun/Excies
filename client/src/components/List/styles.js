import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        paddingBottom: 0
    },
    listContainer: {
        overflow: 'hidden'
    },
    headerBold: {
        color: props.colors.text,
        fontSize: 22,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    headerRegular: {
        color: props.colors.grey,
        fontSize: 16,
        marginBottom: 2,
        marginLeft: 10,
    },
    separator: {
        marginVertical: 20
    }
})