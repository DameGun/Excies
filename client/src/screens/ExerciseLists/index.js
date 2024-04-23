import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetExerciseLists } from '../../redux/slices/exerciseListsSlice.js';
import { thunkLogout } from "../../redux/slices/authSlice.js";
import { List, ListItem } from '../../components'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ExerciseListsScreen({ navigation }) {
    const { allListsData, status } = useSelector(state => state.exerciseLists);
    const { username } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if(status == 'idle') { 
           dispatch(thunkGetExerciseLists({ payload: { username } }))
        }
    }, [])

    useEffect(() => {
        if(status == 'unauthorized') {
            dispatch(thunkLogout());
        }
    }, [status])

    function handleClick(id, title) {
        navigation.navigate('ExerciseListsDetails', { id, title })
    }
    
    return (
        <View>
            {allListsData &&
                <List 
                    title='Exercise lists' 
                    data={allListsData} 
                    onPress={handleClick}
                    renderItem={({ item, isLast }) => (
                        <ListItem 
                            item={item} 
                            infoRight={item.itemsCount}
                            isLast={isLast} 
                            onPress={handleClick}
                            iconName='list'
                        />
                    )}
                    headerComponent={
                        (<ListItem 
                            title='New List...'
                            iconName='plus'
                        />
                        )
                    }
                />
            }
        </View>
    )
}