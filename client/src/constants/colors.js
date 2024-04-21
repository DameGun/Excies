export const BASE_COLORS = {
    colors: {
        grey: '#aeaeb2',
        primary: '#E77917',
        primaryPressed: '#AF5B11',
        whitePressed: '#A6A6A6'
    }
}

export const LIGHT_THEME = {
    isDark: false,
    colors: {
        background: 'white',
        text: 'black',
        ...BASE_COLORS.colors
    }
}

export const DARK_THEME = {
    isDark: true,
    colors: {
        background: 'black',
        text: 'white',
        ...BASE_COLORS.colors
    }
}