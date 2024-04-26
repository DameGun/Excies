import { useTheme } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function EditIcon({ onPress }) {
    const { colors } = useTheme();

    return (
        <Pressable onPress={onPress}>
            {({ pressed }) => 
                <Feather 
                    name="edit" 
                    size={24} 
                    color={pressed ? colors.primaryPressed : colors.primary}
                />
            }
        </Pressable>
    )
}