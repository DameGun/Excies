import { useStyles } from "../../helpers/customHooks";
import CustomButton from "../Button";
import { View, Text } from 'react-native';
import { getStyles } from "./styles";

export default function EmptyList({ childObjectName, parentObjectName, onPress }) {
    const styles = useStyles(getStyles);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>No {childObjectName}</Text>
            <Text style={styles.commonText}>Build your first {parentObjectName}!</Text>
            <CustomButton 
                buttonStyle={styles.button} 
                text={`Add ${childObjectName}`}
                onPress={onPress}
            />
        </View>
    )
}