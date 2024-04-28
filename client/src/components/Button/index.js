import { Keyboard, Pressable, Text, View } from "react-native";
import { getStyles } from './styles.js';
import { useStyles } from "../../helpers/customHooks.js";

export default function CustomButton({ 
    type, 
    text, 
    textStyle, 
    buttonStyle, 
    onPress,
    iconComponent, 
    disabled 
}) {
    const customStyles = useStyles(getStyles);
    
    return (
        <Pressable 
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.8 : 1
                },
                customStyles.button,
                buttonStyle,
            ]}
            onPress={() => {
                if (type == 'submit') {
                    Keyboard.dismiss();
                }
                onPress()
            }}
            disabled={disabled}
        >
            <View style={{ ...customStyles.buttonContainer, flexDirection: iconComponent ? 'row' : 'column' }}>
                {iconComponent}
                {text && (
                    <Text style={[
                        customStyles.text, 
                        textStyle
                    ]}>
                        {text}
                    </Text>
                )}
            </View>
        </Pressable>
    )
}