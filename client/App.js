import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, LoginScreen, RegisterScreen } from "./src/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DARK_THEME, LIGHT_THEME } from "./src/constants/colors";
import Logo from "./src/components/Logo";
import React from "react";

function App() {
  const Tab = createBottomTabNavigator();
  const theme = useColorScheme() == 'dark' ? DARK_THEME : LIGHT_THEME;
  const isAuth = false;

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          tabBarStyle: {
            backgroundColor: theme.colors.background,
          },
          headerRight: () => (
            <Logo/>
          ),
        }}
      >
        {isAuth ? (
          <Tab.Screen 
          name='Home' 
          component={HomeScreen}
          options={{
            headerTitle: ''
          }}
        />
        ) : (
          <React.Fragment>
            <Tab.Screen
              name='Login'
              component={LoginScreen}
            />
            <Tab.Screen
              name='Register'
              component={RegisterScreen}
            />
          </React.Fragment>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;