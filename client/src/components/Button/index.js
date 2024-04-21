import { Keyboard, Pressable, Text } from "react-native";
import { BASE_COLORS } from '../../constants/colors.js';
import { styles as customStyles } from './styles.js';

export default function CustomButton({ type, text, textStyle, buttonStyle, onPress, disabled }) {
    return (
        <Pressable 
            style={({ pressed }) => [
                {
                    backgroundColor: pressed || disabled ? BASE_COLORS.colors.primaryPressed : BASE_COLORS.colors.primary
                },
                buttonStyle,
                customStyles.button,
            ]}
            onPress={() => {
                if (type == 'submit') {
                    Keyboard.dismiss();
                }
                onPress()
            }}
            disabled={disabled}
        >
            {({ pressed }) => (
                <Text style={[
                    {
                        color: pressed || disabled ? BASE_COLORS.colors.whitePressed : 'white'
                    }, 
                    customStyles.text, 
                    textStyle
                ]}>
                {text}
                </Text>
            )}
        </Pressable>
    )
}