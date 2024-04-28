import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    itemContainer: {
        flexGrow: 1,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: props.colors.greyBackground,
    },
    text: {
        color: props.colors.text,
        fontSize: 22
    }
})