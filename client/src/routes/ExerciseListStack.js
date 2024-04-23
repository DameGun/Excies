import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExerciseListsScreen, ExerciseListsDetailsScreen } from "../screens";
import { useCommonHeaderScreenOption } from "../helpers/customHooks";
import { Button } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { thunkLogout } from "../redux/slices/authSlice";

const Stack = createNativeStackNavigator();

export default function ExerciseListStack() {
    const commonScreenOptions = useCommonHeaderScreenOption();
    const { colors } = useTheme();
    const dispatch = useDispatch();
    
    return (
        <Stack.Navigator screenOptions={commonScreenOptions}>
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
        </Stack.Navigator>
    )
}