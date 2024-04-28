import { 
    ExerciseListsScreen, 
    ExerciseListItemsScreen, 
    ListInfoModalScreen, 
    ExercisesModalScreen, 
    DetailedExerciseListItemsScreen,
    CreateDetailedItemModalScreen,
    DetailedExerciseListItemInfoModalScreen
} from "../screens";
import { useHeaderScreenOptions } from "../helpers/customHooks";
import { Button } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { thunkLogout } from "../redux/slices/authSlice";
import { createStackNavigator, TransitionPresets   } from '@react-navigation/stack'
import { getCommonHeaderScreenOptions } from "../constants/common";

const Stack = createStackNavigator();

export default function ExerciseListStack() {
    const commonScreenOptions = useHeaderScreenOptions(getCommonHeaderScreenOptions);
    const { colors } = useTheme();
    const dispatch = useDispatch();
    
    return (
        <Stack.Navigator screenOptions={commonScreenOptions}>
            <Stack.Group>
                <Stack.Screen 
                    name='ExerciseListsScreen'
                    component={ExerciseListsScreen}
                    options={{
                        headerLeft: () => (
                            <Button 
                                title="Log out" 
                                color={colors.primary} 
                                onPress={() => dispatch(thunkLogout())}
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name='ExerciseListItemsScreen'
                    component={ExerciseListItemsScreen}
                />
                <Stack.Screen 
                    name='DetailedExerciseListItemsScreen'
                    component={DetailedExerciseListItemsScreen}
                />
            </Stack.Group>
            <Stack.Group screenOptions={{
                presentation: 'modal',
                gestureEnabled: true,
                gestureDirection: 'vertical',
                ...TransitionPresets.ModalPresentationIOS,
            }}>
                <Stack.Screen 
                    name='ListInfoModalScreen' 
                    component={ListInfoModalScreen}
                />
                <Stack.Screen
                    name='ExercisesModalScreen'
                    component={ExercisesModalScreen}
                    options={{
                        headerLeft: ''
                    }}
                />
                <Stack.Screen
                    name='CreateDetailedItemModalScreen'
                    component={CreateDetailedItemModalScreen}
                    options={{
                        presentation: 'transparentModal',
                        gestureResponseDistance: 500,
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name='DetailedExerciseListItemInfoModalScreen'
                    component={DetailedExerciseListItemInfoModalScreen}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}