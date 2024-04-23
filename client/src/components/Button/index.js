import { Keyboard, Pressable, Text } from "react-native";
import { styles as customStyles } from './styles.js';
import { useTheme } from '@react-navigation/native';

export default function CustomButton({ type, text, textStyle, buttonStyle, onPress, disabled }) {
    const { colors } = useTheme();
    
    return (
        <Pressable 
            style={({ pressed }) => [
                {
                    backgroundColor: pressed || disabled ? colors.primaryPressed : colors.primary
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
                        color: pressed || disabled ? colors.whitePressed : 'white'
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