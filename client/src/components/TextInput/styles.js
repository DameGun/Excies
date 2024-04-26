import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        borderColor: props.colors.greyBackground, 
        color: props.colors.text
    },
    placeholderColor: props.colors.grey
})