import { TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function CustomTextInput(props) {
    const theme = useTheme();
    const colors = theme.colors;

    return (
        <TextInput 
            {...props} 
            style={{ ...props.style, borderColor: colors.grey, color: colors.text }}
            placeholderTextColor={colors.grey}
        />
    )
}