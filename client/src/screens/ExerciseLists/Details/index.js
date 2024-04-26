import { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetExerciseListItems } from '../../../redux/slices/exerciseListItemsSlice.js';
import { CustomButton, EmptyList, List, ListItem, Search, EditIcon } from '../../../components/index.js'
import { convertTimeObjToString } from '../../../helpers/utilities.js';
import { Entypo } from '@expo/vector-icons';
import { useStyles } from "../../../helpers/customHooks.js";
import { getStyles } from "./styles.js";
import { setCurrentList } from "../../../redux/slices/exerciseListsSlice.js";

export default function ExerciseListsDetailsScreen({ route, navigation }) {
    const { id, title } = route.params;
    const { data } = useSelector(state => state.exerciseListItems);
    const { status } = useSelector(state => state.loading);
    const { username } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const styles = useStyles(getStyles);

    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');

    useEffect(() => {
        dispatch(thunkGetExerciseListItems({ payload: { id, username } }));
        dispatch(setCurrentList(id));

        navigation.setOptions({ 
            headerTitle: title,
            headerRight: () => (
                <EditIcon onPress={() => {
                    navigation.navigate('ListInfoModalScreen', { id, actionType: 'info' })
                }}/>
            )
         });
    }, []);

    function handleAddExercise() {
        navigation.navigate('ExercisesModalScreen', { id, title })
    }
    
    return (
        (status != 'loading' && data) && (data.length ? (
            <View style={styles.container}>
                <View>
                    <Search 
                        clicked={clicked} 
                        setClicked={setClicked}
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                    />
                    <List 
                        data={data}
                        renderItem={({ item, isLast }) => (
                            <ListItem 
                                item={item}
                                infoRight={convertTimeObjToString(item.last_time_updated)} 
                                isLast={isLast} 
                                onPress={() => console.log('pressed')}
                            />
                        )}
                        searchPhrase={searchPhrase}
                    />
                </View>
               <View>
                    <CustomButton
                        text='Add Exercise'
                        buttonStyle={styles.addExerciseButton}
                        textStyle={styles.addExerciseText}
                        iconComponent={(
                            <Entypo name="plus" size={24} color={styles.iconColor} />
                        )}
                        onPress={handleAddExercise}
                    />
               </View>
            </View>
            ) : (
                <View style={styles.emptyListContainer}>
                    <EmptyList 
                        childObjectName='Exercise' 
                        parentObjectName='list'
                        onPress={handleAddExercise}
                    />
                </View>
            )
        )
    )
}