import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useStyles } from '@/hooks/useStyles';
import { LoginScreen, RegisterScreen } from '@/screens';
import { getBottomTabOptions } from '@/utils/getBottomTabOptions';
import { getCommonHeaderScreenOptions } from '@/utils/getCommonHeaderScreenOptions';

const Tab = createBottomTabNavigator();

export function AuthTabs() {
  const commonScreenOptions = useStyles(getCommonHeaderScreenOptions);
  const bottomTabOptions = useStyles(getBottomTabOptions);

  return (
    <Tab.Navigator screenOptions={commonScreenOptions}>
      <Tab.Screen
        name='Login'
        component={LoginScreen}
        options={bottomTabOptions({ icon: { type: 'AntDesign', name: 'login' } })}
      />
      <Tab.Screen
        name='Register'
        component={RegisterScreen}
        options={bottomTabOptions({ icon: { type: 'AntDesign', name: 'adduser' } })}
      />
    </Tab.Navigator>
  );
}
