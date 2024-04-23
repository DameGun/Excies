import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen, RegisterScreen } from "../screens";
import { useCommonHeaderScreenOption } from "../helpers/customHooks";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const commonScreenOptions = useCommonHeaderScreenOption();

    return (
        <Tab.Navigator screenOptions={commonScreenOptions}>
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