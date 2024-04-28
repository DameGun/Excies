import { StyleSheet } from "react-native";
import { getInfoModalScreenStylesDefault } from "../../../constants/common";

export const getStyles = (props) => StyleSheet.create({
    ...getInfoModalScreenStylesDefault(props),
    headerButtonColor: props.colors.primary
})