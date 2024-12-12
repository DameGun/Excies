import { useStyles } from "./useStyles";
import { getBottomTabOptions, getBottomTabStyles } from "@/utils/getBottomTabOptions";
import { IconNames } from "@/types/icons";

export function useGetBottomTabOptions() {
    const styles = useStyles(getBottomTabStyles);

    return (title: string, iconName: IconNames) => getBottomTabOptions(styles, title, iconName);
}