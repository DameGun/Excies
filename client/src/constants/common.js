import Logo from "../components/Logo.js"; 

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