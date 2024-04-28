import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    headerText: {
        color: props.colors.text,
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 10
    },
    commonText: {
        color: props.colors.grey,
        marginBottom: 15
    },
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 5,
    },
    button: {
        padding: 10,
        width: '40%'
    }
})