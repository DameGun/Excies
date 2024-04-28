import { Image } from "react-native";

export default function Logo({ navigation }) {
    return (
        <Image source={require('../assets/icon.png')} style={{ height: 40, width: 40, marginRight: 20 }}/>
    )
}