import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen, RegisterScreen } from "../screens";
import { useHeaderScreenOptions } from "../helpers/customHooks";
import { getCommonHeaderScreenOptions } from "../constants/common";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const commonScreenOptions = useHeaderScreenOptions(getCommonHeaderScreenOptions);

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