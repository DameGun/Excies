import { useTheme } from "@react-navigation/native";
import React from "react";
import { getCommonHeaderScreenOptions } from "../constants/common.js";

export function useStyles(getStyles) {
    const { colors } = useTheme();

    const globalStyles = React.useMemo(() => getStyles({ colors }), [colors]);

    return globalStyles;
}

export function useCommonHeaderScreenOption(params) {
    const { colors } = useTheme();

    const screenOptions = React.useMemo(() => getCommonHeaderScreenOptions({ ...params, colors }), [colors]);

    return screenOptions;
}