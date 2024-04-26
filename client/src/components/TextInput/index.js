import { Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import { useStyles } from "../../helpers/customHooks";
import { getStyles } from "./styles";

export default function CustomTextInput(props) {
    const styles = useStyles(getStyles);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
            <TextInput 
                {...props} 
                style={{ ...props.style, ...styles.input }}
                placeholderTextColor={styles.placeholderColor}
            />
        </TouchableWithoutFeedback>
    )
}