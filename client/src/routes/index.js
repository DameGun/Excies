import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import AuthStack from './AuthStack.js';
import AppStack from "./AppStack";
import { Logo, CustomModal, Loading } from "../components";
import { StatusBar, useColorScheme } from "react-native";
import { DARK_THEME, LIGHT_THEME } from "../constants/colors.js";

function Router({ isLoggedIn }) {
    const theme = useColorScheme() == 'dark' ? DARK_THEME : LIGHT_THEME;

    const commonScreenOptions = {
        headerStyle: {
            backgroundColor: theme.colors.background,
          },
          tabBarStyle: {
            backgroundColor: theme.colors.background,
          },
        headerRight: () => <Logo />
    }

    return (
        <NavigationContainer theme={theme}>
            <StatusBar 
                barStyle={theme === DARK_THEME ? 'light-content' : 'dark-content'}
                backgroundColor={theme === DARK_THEME ? 'black' : 'white'}
            />
            {!isLoggedIn ? (
                <AuthStack screenOptions={commonScreenOptions}/>
            ) : (
                <AppStack screenOptions={commonScreenOptions}/>
            )}
            <CustomModal>
                <Loading/>
            </CustomModal>
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(Router);