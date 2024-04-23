import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetExerciseListItems } from '../../redux/slices/exerciseListsSlice.js';
import { EmptyList, List, ListItem } from '../../components/index.js'
import { convertTimeObjToString } from '../../helpers/utilities.js';

export default function ExerciseListsDetailsScreen({ route, navigation }) {
    const { id, title } = route.params;
    const { listData, status } = useSelector(state => state.exerciseLists);
    const { username } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if(status == 'idle') { 
           dispatch(thunkGetExerciseListItems({ payload: { id, username } }))
        }
        navigation.setOptions({ headerTitle: title });
    }, []);
    
    return (
        status != 'loading' && listData && (listData.length ? (
            <View>
                <List 
                data={listData}
                renderItem={({ item, isLast }) => (
                    <ListItem 
                        item={item}
                        infoRight={convertTimeObjToString(item.last_time_updated)} 
                        isLast={isLast} 
                        onPress={() => console.log('pressed')}
                    />
                )}
                />
            </View>
            ) : (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <EmptyList itemName='Exercise'/>
                </View>
            )
        )
    )
}