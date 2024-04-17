import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 40,
        borderWidth: 1,
        width: 250,
        borderRadius: 8,
        padding: 10,
        marginTop: 15,
    },
    buttonText: {
        fontSize: 16
    },
    button: {
        marginTop: 15,
    },
    error: {
        color: 'red',
        marginTop: 10
    },
    logo: {
        height: 110,
        resizeMode: 'contain',
        marginBottom: 20
    }
})