import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetExerciseLists } from '../../redux/slices/exerciseListsSlice.js';
import { getExerciseLists } from '../../helpers/api.js';
import { thunkLogout } from "../../redux/slices/authSlice.js";

export default function HomeScreen() {
    const { data, status } = useSelector(state => state.exerciseLists);
    const { username } = useSelector(state => state.auth);
    const dispatch = useDispatch()

    useEffect(() => {
        if(status == 'idle') { 
           dispatch(thunkGetExerciseLists({ apicall: getExerciseLists, payload: { username } }))
        }
    }, [])

    useEffect(() => {
        if(status == 'unauthorized') {
            dispatch(thunkLogout());
        }
    }, [status])
    
    return (
        <View>
            {data &&
                <FlatList 
                    data={data}
                    renderItem={({item}) => <Text style={{ color: 'white' }}>{item.name}</Text>}
                />
            }
        </View>
    )
}