import { Button, Image } from "react-native";

export default function Logo({ navigation }) {
    return (
        <Image source={require('../assets/icon.png')} style={{ height: 50, width: 50, marginRight: 15 }}/>
    )
}