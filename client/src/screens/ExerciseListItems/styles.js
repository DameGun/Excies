import { StyleSheet } from "react-native";

export const getStyles = (props) => StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-between'
    },
    addExerciseButton: {
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 5,
        height: 50,
        backgroundColor: props.colors.greyBackground
    },
    addExerciseText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    iconColor: props.colors.primary,
    shadow: {
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 15,
    }
})