const COMMON = {
    colors: {
        grey: '#aeaeb2',
        primary: '#E77917',
        primaryPressed: '#AF5B11',
        whitePressed: '#A6A6A6'
    }
}

const LIGHT_THEME = {
    isDark: false,
    colors: {
        background: 'white',
        text: 'black',
        ...COMMON.colors
    }
}

const DARK_THEME = {
    isDark: true,
    colors: {
        background: 'black',
        text: 'white',
        ...COMMON.colors
    }
}

export {
    LIGHT_THEME,
    DARK_THEME,
    COMMON
}