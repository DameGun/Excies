import React from 'react';
import { View, Text, Pressable, SafeAreaView, SectionList } from 'react-native';
import { getStyles } from './styles';
import { useStyles } from '../../helpers/customHooks'
import { AntDesign } from '@expo/vector-icons';

const ListItem = React.memo(({ item, iconName, styles, onPress }) => (
    <Pressable
        style={({ pressed }) => [
            {
                backgroundColor: pressed ? styles.listItemPressed : 'black'
            }
        ]}
        onPress={() => onPress(item)}
    >
        <View style={styles.itemContainer}>
            <AntDesign name={iconName} size={16} color={styles.iconColor} />
            <View style={styles.borderContainer}>
                <Text style={styles.listItem}>{item.name}</Text>
            </View>
        </View>
    </Pressable>
))

export default function LargeList({ sections, onPress }) {
    const styles = useStyles(getStyles);

    const renderItem = ({ item, section: { iconName }}) => (
        <ListItem item={item} iconName={iconName} styles={styles} onPress={onPress} />
    )

    const headerComponent = React.useCallback(({ section: { title }}) => (
        <Text style={styles.header}>{title}</Text>
    ))

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listsContainer}>
                <SectionList 
                    sections={sections}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    renderSectionHeader={headerComponent}
                    ListFooterComponent={<View style={{ paddingVertical: 70}}></View>}
                    getItemLayout={(data, index) => (
                        {length: 50, offset: 50 * index, index}
                    )}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                    windowSize={10}
                    removeClippedSubviews={true}
                    stickySectionHeadersEnabled={true}
                    legacyImplementation={true}
                />
            </View>
        </SafeAreaView>
    )
}