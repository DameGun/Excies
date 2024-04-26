import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    container: {
        marginTop: 10
    },
    listsContainer: {
        marginTop: 20,
        
    },
    itemContainer: {
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItem: {
        color: props.colors.text,
        fontSize: 16,
        paddingVertical: 12
    },
    borderContainer: {
        flex: 1,
        marginLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: props.colors.greyBackground,
    },
    header: {
        backgroundColor: props.colors.greyBackground,
        paddingLeft: 20,
        color: props.colors.grey,
        fontWeight: 'bold',
        paddingVertical: 2,
        fontSize: 14
    },
    iconColor: props.colors.primary,
    listItemPressed: props.colors.greyBackground
})