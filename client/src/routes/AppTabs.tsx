import { useTranslation } from 'react-i18next';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useStyles } from '@/hooks/useStyles';
import { getBottomTabOptions, getBottomTabStyles } from '@/utils/getBottomTabOptions';
import {
  getCommonHeaderScreenOptions,
  getCommonHeaderScreenStyles,
} from '@/utils/getCommonHeaderScreenOptions';

import { ExerciseListStack } from './ExerciseListStack';

const Tab = createBottomTabNavigator();

export function AppTabs() {
  const styles = useStyles(getCommonHeaderScreenStyles, getBottomTabStyles);
  const { t } = useTranslation();

  return (
    <Tab.Navigator screenOptions={getCommonHeaderScreenOptions(styles)}>
      <Tab.Screen
        name={t('tabs.home')}
        component={ExerciseListStack}
        options={getBottomTabOptions(styles, 'home')}
      />
    </Tab.Navigator>
  );
}
