import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        fontSize: 16
    },
    icon: {
        paddingHorizontal: 10
    },
    borderContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10
    },
    border: {
        borderBottomWidth: 1, 
        borderBottomColor: props.colors.grey
    },
    infoRightContainer: {
        flexDirection: 'row',
        paddingRight: 10,
        gap: 5,
        alignItems: 'center'
    },
    infoRightText: {
        fontSize: 16,
        color: props.colors.grey
    }
})