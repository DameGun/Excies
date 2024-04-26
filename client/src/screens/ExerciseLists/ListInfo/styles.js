import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20
    },
    text: {
        color: props.colors.grey,
        paddingLeft: 10,
        paddingVertical: 5,
        textTransform: 'uppercase'
    },
    inputContainer: {
        alignItems: 'flex-start'
    },
    icon: {
        alignSelf: 'center'
    },
    input: {
        height: 40,
        width: '100%'
    },
    error: {
        color: 'red',
        marginTop: 10
    },
    deleteButtonText: {
        color: 'red',
        fontSize: 16
    },
    deleteButton: {
        backgroundColor: props.colors.greyBackground,
        alignItems: 'flex-start',
        marginTop: 40,
        height: 50
    }
})