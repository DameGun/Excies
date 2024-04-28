import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetExerciseLists } from '../../../redux/slices/exerciseListsSlice.js';
import { CustomFlatList, ListItem } from '../../../components/index.js';
import { useIsFocused } from '@react-navigation/native';

export default function ExerciseListsScreen({ navigation }) {
    const { data } = useSelector(state => state.exerciseLists);
    const { username } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            dispatch(thunkGetExerciseLists({ payload: { username } }))
        }
    }, [isFocused])

    function handleListClick(item) {
        navigation.navigate('ExerciseListItemsScreen', { id: item.id, title: item.name })
    }

    function handleNewListClick() {
        navigation.navigate('ListInfoModalScreen')
    }
    
    return (
        <View style={{ flex: 1 }}>
            {data &&
                <CustomFlatList 
                    title='Exercise lists' 
                    data={data} 
                    renderItem={({ item, isLast, index }) => (
                        <ListItem 
                            item={item} 
                            infoRight={item.itemsCount}
                            isLast={isLast} 
                            onPress={handleListClick}
                            iconName='list'
                            index={index}
                        />
                    )}
                    headerComponent={
                        (<View>
                            <ListItem 
                                title='New List...'
                                iconName='plus'
                                onPress={handleNewListClick}
                                index={0}
                            />
                        </View>)
                    }
                />
            }
        </View>
    )
}