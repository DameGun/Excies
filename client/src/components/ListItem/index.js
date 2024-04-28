import { Pressable, Text, View } from "react-native"
import { useStyles } from '../../helpers/customHooks.js';
import { getStyles } from "./styles.js";
import { useTheme } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

export default function ListItem({ 
    title = 'Empty title',
    titleStyle, 
    item, 
    iconName, 
    iconSize = 20, 
    iconColor, 
    infoRight, 
    isLast,
    index,
    onPress,
    children
}) {
    const { colors } = useTheme();
    const styles = useStyles(getStyles);

    return (
       <Pressable 
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: colors.greyBackground,                    
                },
                isLast && styles.itemLastStyle,
                index == 0 && styles.itemFirstStyle
            ]}
            onPress={() => {
                if(onPress) {
                    if(item) {
                        return onPress(item)
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
                        {
                            color: !item ? colors.primary : colors.text,
                        },
                        styles.text,
                        titleStyle
                    ]}>
                        {item?.name || title}
                    </Text>

                    <View style={styles.infoRightContainer}>
                        {children}
                        {infoRight && (<Text style={styles.infoRightText}>{infoRight}</Text>)}
                        <Entypo name="chevron-right" size={18} color={colors.grey} />
                    </View>
                </View>
            </View>
       </Pressable>
    )
}