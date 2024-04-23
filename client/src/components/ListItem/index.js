import { Pressable, Text, View } from "react-native"
import { useStyles } from '../../helpers/customHooks.js';
import { getStyles } from "./styles.js";
import { useTheme } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

export default function ListItem({ 
    title = 'Empty title', 
    item, 
    iconName, 
    iconSize = 20, 
    iconColor, 
    infoRight, 
    isLast,
    onPress 
}) {
    const { colors } = useTheme();
    const styles = useStyles(getStyles);

    return (
       <Pressable 
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? colors.greyPressed : colors.greyBackground,
                }
            ]}
            onPress={() => {
                if(onPress) {
                    if(item) {
                        return onPress(item.id, item.name)
                    }
                    else {
                        return onPress()
                    }
                }
            }}
        >
            <View style={styles.container}>
                {iconName ? (
                    <View style={styles.icon}>
                        <Entypo name={iconName} size={iconSize} color={iconColor || colors.primary}/>
                    </View>
                ) : (
                    <View style={styles.icon}/>
                )}
                <View style={[styles.borderContainer, !isLast && styles.border]}>
                    <Text style={[
                        styles.text,
                        {
                            color: !item ? colors.primary : colors.text
                        }
                    ]}>
                        {item ? item.name : title}
                    </Text>

                    {infoRight && (
                        <View style={styles.infoRightContainer}>
                            <Text style={styles.infoRightText}>{infoRight}</Text>
                            <Entypo name="chevron-right" size={10} color={colors.grey} />
                        </View>
                    )}
                </View>
            </View>
       </Pressable>
    )
}