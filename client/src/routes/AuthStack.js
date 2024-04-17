import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen, RegisterScreen } from "../screens";

const Tab = createBottomTabNavigator();

export default function AuthStack({ screenOptions }) {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
              name='Login'
              component={LoginScreen}
            />
            <Tab.Screen
              name='Register'
              component={RegisterScreen}
            />
        </Tab.Navigator>
    )
}