import { SectionList, View, Text } from "react-native";
import { useStyles } from "../../helpers/customHooks";
import { getStyles } from "./styles";

export default function CustomSectionList({ sections, renderItem }) {
    const styles = useStyles(getStyles);

    const headerComponent = ({ section: { title }}) => (
        <Text style={styles.headerRegular}>{title}</Text>
    )

    const sectionSeparator = () => (
        <View style={styles.separator}/>
    )

    return (
        <View style={styles.container}>
            <SectionList
                sections={sections}
                keyExtractor={item => item.id}
                renderSectionFooter={sectionSeparator}
                renderSectionHeader={headerComponent}
                renderItem={renderItem}
                ListFooterComponent={<View style={{ paddingVertical: 20}}></View>}
            /> 
        </View>
    )
}