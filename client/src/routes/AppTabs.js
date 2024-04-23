import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExerciseListStack from "./ExerciseListStack";
import { useCommonHeaderScreenOption } from "../helpers/customHooks";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const commonScreenOptions = useCommonHeaderScreenOption();

  return (
      <Tab.Navigator screenOptions={commonScreenOptions}>
        <Tab.Screen
          name="Home"
          component={ExerciseListStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
  );
}
