import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen, RegisterScreen } from "../screens";
import { useHeaderScreenOptions } from "../helpers/customHooks";
import { getBottomTabOptions, getCommonHeaderScreenOptions } from "../constants/common";
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const commonScreenOptions = useHeaderScreenOptions(getCommonHeaderScreenOptions);
  const bottomTabOptions = useHeaderScreenOptions(getBottomTabOptions);

    return (
        <Tab.Navigator screenOptions={commonScreenOptions}>
          <Tab.Screen
              name='Login'
              component={LoginScreen}
              options={bottomTabOptions(
                { icon: { namespace: AntDesign, name: 'login' } }
              )}
            />
            <Tab.Screen
              name='Register'
              component={RegisterScreen}
              options={bottomTabOptions(
                {icon: { namespace: AntDesign, name: 'adduser' }}
              )}
            />
        </Tab.Navigator>
    )
}