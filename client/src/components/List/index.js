import { FlatList, View, Text } from "react-native"
import { getStyles } from "./styles"
import { useStyles } from "../../helpers/customHooks"

export default function List({ title, data, renderItem, headerComponent, searchPhrase = "" }) {
    const styles = useStyles(getStyles);

    const renderItemWithSearch = ({ item, index }) => {
        let isLast = index == data.length - 1

        if (searchPhrase == "") {
            return renderItem({ item, isLast })
        }
        if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return renderItem({ item, isLast })
        }
    }

    return (
        <View style={styles.container}>
            {title && (
                <Text style={styles.header}>{title}</Text>
            )}
            <FlatList
                ListHeaderComponent={headerComponent}
                contentContainerStyle={styles.listContainer} 
                data={data} 
                renderItem={renderItemWithSearch}
                keyExtractor={item => item.id}
            /> 
        </View>
    )
}