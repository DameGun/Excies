import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    headerText: {
        color: props.colors.text,
        fontWeight: 'bold',
        fontSize: 22
    },
    commonText: {
        color: props.colors.grey,
        marginBottom: 15
    },
    container: {
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        gap: 5
    },
    button: {
        width: '80%'
    }
})