import { View, Text } from 'react-native';
import { CustomButton, CustomTextInput } from '../../../components';
import { useStyles } from '../../../helpers/customHooks';
import { getStyles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { getModalHeaderScreenOption } from '../../../constants/common';
import { useDispatch } from 'react-redux';
import { thunkDeleteDetailedExerciseListItem, thunkUpdateDetailedExerciseListItem } from '../../../redux/slices/detailedExerciseListItemsSlice';

export default function DetailedExerciseListItemInfoModalScreen({ route, navigation }) {
    const { username, list_id, list_item_id, item } = route.params;
    const styles = useStyles(getStyles);
    const dispatch = useDispatch();
    
    const [notes, setNotes] = useState(item.notes || '');
    const [rep, setRep] = useState(item.rep.toString());
    const [weight, setWeight] = useState(item.weight.toString());
    const [repError, setRepError] = useState('');
    const [weightError, setWeightError] = useState('');
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        navigation.setOptions(getModalHeaderScreenOption(
            { 
                buttonColor: styles.headerButtonColor,
                onPress: handleSubmit,
                title: 'Edit Set'
            }
        ))
    }, [])

    useEffect(() => {
        if(submit) {
            if(checkRep() && checkWeight()) {
                dispatch(thunkUpdateDetailedExerciseListItem({
                    payload: {
                        username, 
                        list_id, 
                        list_item_id, 
                        id: item.id, 
                        detailed_exercise_list_item: { rep, weight, notes }
                    }
                }))
                navigation.goBack();
            }
            else {
                setSubmit(false)
            }
        } 
    }, [submit])

    function checkRep() {
        if(isNaN(rep) || (Number(rep) < 0 || Number(rep) >= 100)) {
            setRepError('Enter a valid repetitions amount');
        }
        else {
            if(rep == 0) {
                setRepError('Enter at least 1 repetition');
            }
            else {
                return true;
            }
        }
        return false;
    }

    function checkWeight() {
        if(!parseFloat(weight) || (parseFloat(weight) < 0 || parseFloat(weight) >= 1000)) {
            setWeightError('Enter a valid weight amount');
        }
        else {
            return true;
        }

        return false;
    }

    function handleSubmit() {
        setRepError('');
        setWeightError('');
        setSubmit(true);
    };

    function handleDelete() {
        dispatch(thunkDeleteDetailedExerciseListItem({
            payload: {
                username,
                list_id,
                list_item_id,
                id: item.id
            }
        }))
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Notes</Text>
                <CustomTextInput 
                    placeholder='Comment'
                    style={styles.input}
                    defaultValue={notes}
                    onChangeText={newText => setNotes(newText)}
                />
            </View>
            <View style={{ ...styles.inputContainer, marginTop: 10 }}>
                <Text style={styles.text}>Repetitions</Text>
                <CustomTextInput
                    style={styles.input}
                    defaultValue={rep}
                    onChangeText={newText => setRep(newText)}
                    keyboardType='number-pad'
                />
                {repError && (<Text style={styles.error}>{repError}</Text>)}
            </View>
            <View style={{ ...styles.inputContainer, marginTop: 10 }}>
                <Text style={styles.text}>Weight (kg)</Text>
                <CustomTextInput
                    style={styles.input}
                    defaultValue={weight}
                    onChangeText={newText => setWeight(newText)}
                    keyboardType='number-pad'
                />
                {weightError && (<Text style={styles.error}>{weightError}</Text>)}
            </View>
            <CustomButton 
                text='Delete' 
                textStyle={styles.deleteButtonText} 
                buttonStyle={styles.deleteButton}
                iconComponent={(<FontAwesome name="trash-o" size={20} color="red" />)}
                onPress={handleDelete}
            />
        </View>
    )
}