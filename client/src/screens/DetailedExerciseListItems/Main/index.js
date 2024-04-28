import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetDetailedExerciseListItems } from '../../../redux/slices/detailedExerciseListItemsSlice.js';
import { CustomButton, CustomSectionList, EmptyList, ListItem } from '../../../components';
import { useStyles } from '../../../helpers/customHooks.js';
import { getStyles } from './styles.js';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function DetailedExerciseListItemsScreen({ route, navigation }) {
    const { list_id, list_item_id } = route.params;
    const { data } = useSelector(state => state.detailedExerciseListItems);
    const { username } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const styles = useStyles(getStyles);

    useEffect(() => {
        dispatch(thunkGetDetailedExerciseListItems({ payload: { username, list_id, list_item_id } }));

        navigation.setOptions({
            headerTitle: route.params.name
        })
    }, [])

    function handleNavigate() {
        navigation.navigate(
            'CreateDetailedItemModalScreen', 
            { username, list_id, list_item_id }
        )
    }

    function handleInfo(item) {
        navigation.navigate(
            'DetailedExerciseListItemInfoModalScreen',
            { username, list_id, list_item_id, item }
        )
    }

    return (
        (data.length ? (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <CustomSectionList
                        sections={data}
                        renderItem={({ item, index, section: { data }}) => (
                            <ListItem
                                title={item.time} 
                                item={item}  
                                onPress={handleInfo}
                                isLast={index == data.length - 1}
                                index={index}
                                titleStyle={styles.time}
                            >
                                <View style={styles.itemInfoMainContainer}>
                                    <View style={styles.itemInfoSubContainer}>
                                        <Text style={styles.itemInfoNumberLeft}>{item.rep}</Text>
                                        <Text style={styles.itemInfoTextLeft}>rep</Text>
                                    </View>
                                    <View style={styles.itemInfoSubContainer}>
                                        <Text style={styles.itemInfoNumberRight}>{item.weight}</Text>
                                        <Text style={styles.itemInfoTextRight}>kg</Text>
                                    </View>
                                </View>
                            </ListItem>
                        )}
                    />
                    
                </View>
                <View style={styles.addButtonContainer}>
                    <CustomButton
                        iconComponent={<Entypo name="plus" size={50} color="black" />}
                        buttonStyle={styles.addButton}
                        onPress={handleNavigate}
                    />
                </View>
            </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <EmptyList
                        primaryText='No Sets'
                        secondaryText='Record your sets to track progress'
                        IconComponent={<Ionicons name="stats-chart" size={50} color="#aeaeb2" />}
                    />
                    <View style={styles.addButtonContainer}>
                        <CustomButton
                            iconComponent={<Entypo name="plus" size={50} color="black" />}
                            buttonStyle={styles.addButton}
                            onPress={handleNavigate}
                        />
                    </View>
                </View>
            )
        )
    )
}