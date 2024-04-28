import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    input: {
        width: "100%",
        paddingLeft: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        color: 'white'
    },
    input_clicked: {
        width: "100%",
        paddingLeft: 27,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        color: 'white'
    },
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20,
    },
    searchBar_clicked: {
        borderWidth: 1,
        borderColor: props.colors.greyBackground,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: '75%',
        padding: 8,
        marginRight: 5
    },
    iconLeft_clicked: {
        paddingLeft: 18
    },
    iconRight_clicked: {
        paddingRight: 12
    },
    searchBar_unclicked: {
        borderWidth: 1,
        borderColor: props.colors.greyBackground,
        borderRadius: 15,
        flexDirection: "row",
        borderRadius: 15,
        alignItems: "center",
        width: '94%',
        padding: 8
    },
    buttonColor: props.colors.primary,
    placeholderTextColor: props.colors.grey
})