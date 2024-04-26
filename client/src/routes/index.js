import { NavigationContainer } from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";
import AuthTabs from './AuthTabs.js';
import AppTabs from "./AppTabs.js";
import { Loader, Error } from "../components";
import { StatusBar, useColorScheme } from "react-native";
import { DARK_THEME, LIGHT_THEME } from "../constants/colors.js";
import { useEffect } from "react";
import { thunkAppOpen } from "../redux/slices/authSlice.js";
import { thunkGetExercises } from '../redux/slices/exercisesSlice.js';

function Router({ isLoggedIn }) {
    const theme = useColorScheme() == 'dark' ? DARK_THEME : LIGHT_THEME;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkAppOpen());
        dispatch(thunkGetExercises());
    }, [])

    return (
        <NavigationContainer theme={theme}>
            <StatusBar 
                barStyle={theme === DARK_THEME ? 'light-content' : 'dark-content'}
                backgroundColor={theme === DARK_THEME ? 'black' : 'white'}
            />
            {!isLoggedIn ? (
                <AuthTabs/>
            ) : (
                <AppTabs/>
            )}

            <Loader />
            <Error />
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
})

export default connect(mapStateToProps)(Router);