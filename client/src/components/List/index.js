import { FlatList, View, Text } from "react-native"
import { getStyles } from "./styles"
import { useStyles } from "../../helpers/customHooks"

export default function List({ title, data, renderItem, headerComponent }) {
    const styles = useStyles(getStyles);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{title}</Text>
            <FlatList
                ListHeaderComponent={headerComponent}
                contentContainerStyle={styles.listContainer} 
                data={data} 
                renderItem={({ item, index }) => { 
                    let isLast = index == data.length - 1;
                    return renderItem({ item, index, isLast });
                }}
            /> 
        </View>
    )
}