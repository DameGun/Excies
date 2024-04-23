import { TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function CustomTextInput(props) {
    const { colors } = useTheme();

    return (
        <TextInput 
            {...props} 
            style={{ ...props.style, borderColor: colors.grey, color: colors.text }}
            placeholderTextColor={colors.grey}
        />
    )
}