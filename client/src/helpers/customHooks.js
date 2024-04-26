import { useTheme } from "@react-navigation/native";
import React from "react";

export function useStyles(getStyles) {
    const { colors } = useTheme();

    const globalStyles = React.useMemo(() => getStyles({ colors }), [colors]);

    return globalStyles;
}

export function useHeaderScreenOptions(getHeaderOptions) {
    const { colors } = useTheme();

    const screenOptions = React.useMemo(() => getHeaderOptions({ colors }), [colors]);

    return screenOptions;
}