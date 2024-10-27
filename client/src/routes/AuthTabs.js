import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { getBottomTabOptions, getCommonHeaderScreenOptions } from '../constants/common';
import { useHeaderScreenOptions } from '../helpers/customHooks';
import { LoginScreen, RegisterScreen } from '../screens';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const commonScreenOptions = useHeaderScreenOptions(getCommonHeaderScreenOptions);
  const bottomTabOptions = useHeaderScreenOptions(getBottomTabOptions);

  return (
    <Tab.Navigator screenOptions={commonScreenOptions}>
      <Tab.Screen
        name='Login'
        component={LoginScreen}
        options={bottomTabOptions({ icon: { namespace: AntDesign, name: 'login' } })}
      />
      <Tab.Screen
        name='Register'
        component={RegisterScreen}
        options={bottomTabOptions({ icon: { namespace: AntDesign, name: 'adduser' } })}
      />
    </Tab.Navigator>
  );
}
