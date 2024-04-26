import { ExerciseListsScreen, ExerciseListsDetailsScreen, ListInfoModalScreen, ExercisesModalScreen } from "../screens";
import { useHeaderScreenOptions } from "../helpers/customHooks";
import { Button } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { thunkLogout } from "../redux/slices/authSlice";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { getCommonHeaderScreenOptions } from "../constants/common";

const Stack = createNativeStackNavigator();

export default function ExerciseListStack() {
    const commonScreenOptions = useHeaderScreenOptions(getCommonHeaderScreenOptions);
    const { colors } = useTheme();
    const dispatch = useDispatch();
    
    return (
        <Stack.Navigator screenOptions={commonScreenOptions}>
            <Stack.Group>
                <Stack.Screen 
                    name='ExerciseLists'
                    component={ExerciseListsScreen}
                    options={{
                        headerLeft: () => (
                            <Button title="Log out" color={colors.primary} onPress={() => dispatch(thunkLogout())}/>
                        )
                    }}
                />
                <Stack.Screen
                    name='ExerciseListsDetails'
                    component={ExerciseListsDetailsScreen}
                />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal', animation: 'slide_from_bottom' }}>
                <Stack.Screen 
                    name='ListInfoModalScreen' 
                    component={ListInfoModalScreen}
                />
                <Stack.Screen
                    name='ExercisesModalScreen'
                    component={ExercisesModalScreen}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}