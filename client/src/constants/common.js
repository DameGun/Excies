import Logo from "../components/Logo.js";
import { Button } from "react-native"; 

// Loading

export const MAX_REQUEST_WAITING_EXPIRE_TIME = 8000;

export const MIN_REQUEST_WAITING_EXPIRE_TIME = 100;


// Navigation

export const getCommonHeaderScreenOptions = (props) => {
    return {
        headerStyle: {
            backgroundColor: props.colors.background,
        },
        tabBarStyle: {
            backgroundColor: props.colors.background,
        },
        headerTitle: '',
        headerRight: () => <Logo />
    }
}

export const getModalHeaderScreenOption = (props) => {
    return {
        headerRight: () => (
            <Button
                disabled={props.disabled}
                title='Done' 
                color={props.buttonColor} 
                onPress={() => props.onPress()}
            />),
        headerTitle: props.title,
        headerTitleAlign: 'center'
    }
}