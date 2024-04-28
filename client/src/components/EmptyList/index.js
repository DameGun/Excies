import { useStyles } from "../../helpers/customHooks";
import CustomButton from "../Button";
import { View, Text } from 'react-native';
import { getStyles } from "./styles";

export default function EmptyList({ primaryText, secondaryText, buttonText, IconComponent, onPress }) {
    const styles = useStyles(getStyles);

    return (
        <View style={styles.container}>
            {IconComponent}
            <Text style={styles.headerText}>{primaryText}</Text>
            <Text style={styles.commonText}>{secondaryText}</Text>
            {buttonText && (
                <CustomButton 
                    buttonStyle={styles.button} 
                    text={buttonText}
                    onPress={onPress}
                />
            )}
        </View>
    )
}