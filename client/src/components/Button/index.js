import { Pressable, Text } from "react-native";
import { COMMON } from '../../constants/colors.js';
import { styles as customStyles } from './styles.js';

export default function CustomButton({ text, textStyle, buttonStyle, onPress, disabled }) {
    return (
        <Pressable 
            style={({ pressed }) => [
                {
                    backgroundColor: pressed || disabled ? COMMON.colors.primaryPressed : COMMON.colors.primary
                },
                buttonStyle,
                customStyles.button,
            ]}
            onPress={() => {
                onPress()
            }}
            disabled={disabled}
        >
            {({ pressed }) => (
                <Text style={[
                    {
                        color: pressed || disabled ? COMMON.colors.whitePressed : 'white'
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