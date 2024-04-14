import { useTheme } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
    const colors = useTheme().colors;

    return (
        <View style={{
            backgroundColor: colors.commonColor,
            flex: 1
        }}>
            <Text>Home!</Text>
        </View>
    )
}