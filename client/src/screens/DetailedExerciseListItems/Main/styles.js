import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-between'
    },
    addButtonContainer: {
        position: 'absolute', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: 80,
        width: 80, 
        alignSelf: 'center',
        bottom: 10
    },
    addButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    itemInfoMainContainer: {
        flexDirection: 'row', 
        gap: 30
    },
    time: {
        fontSize: 14,
        color: props.colors.grey
    },
    itemInfoSubContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    itemInfoNumberLeft: {
        color: props.colors.primary,
        fontWeight: 'bold',
        fontSize: 18
    },
    itemInfoTextLeft: {
        color: props.colors.primary,
        fontSize: 12,
        paddingLeft: 2,
        paddingBottom: 2
    },
    itemInfoNumberRight: {
        color: props.colors.primary,
        fontWeight: 'bold',
        fontSize: 18
    },
    itemInfoTextRight: {
        color: props.colors.primary,
        fontSize: 12,
        paddingLeft: 2,
        paddingBottom: 2
    }
})