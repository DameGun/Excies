import { Pressable, Text, View } from "react-native";
import { useStyles } from "../../helpers/customHooks";
import { getStyles } from "./styles";
import { Feather } from '@expo/vector-icons';

const Number = ({ onPress, number, styles }) => (
    <Pressable 
        style={({ pressed }) => [
            {
                opacity: pressed ? 0.6 : 1
            },
            styles.itemContainer
        ]}
        onPress={() => onPress(number)}
    >
        <Text style={styles.text}>{number}</Text>
    </Pressable>
)

export default function NumbersInput({ onNumberPress, onRemove }) {
    const styles = useStyles(getStyles);

    return (
        <View style={styles.container}>
            {[...Array(9).keys()].map(num => (
                <Number
                    key={num}
                    number={num + 1}
                    styles={styles}
                    onPress={onNumberPress}
                />
            ))}
            <Number number={0} styles={styles} onPress={onNumberPress}/>
            <Pressable 
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.6 : 1
                    },
                    styles.itemContainer
                ]}
                onPress={() => onRemove()}
            >
                <Feather name="delete" size={22} style={styles.text} />
            </Pressable>
        </View>
    )
}