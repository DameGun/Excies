import { View, Text, Pressable } from "react-native";
import { getStyles } from "./styles";
import { useStyles } from '../../../helpers/customHooks';
import { FontAwesome6 } from '@expo/vector-icons';
import { CustomButton, NumbersInput } from '../../../components'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkCreateDetailedExerciseListItem } from '../../../redux/slices/detailedExerciseListItemsSlice';

const InputButton = ({ type, number, showOperator, styles, onPress }) => (
    <Pressable
        style={({ pressed }) => [
            {
                opacity: pressed ? 0.6 : 1
            },
            styles.inputButton
        ]}
        onPress={() => onPress({ type, number })}
    >
        <Text style={type == 'increase' ? styles.inputButtonNumber : styles.inputButtonText}>
            {type == 'increase' ? number : (showOperator && '-')}
        </Text>
        <Text style={type == 'increase' ? styles.inputButtonText : styles.inputButtonNumber}>
            {type == 'increase' ? (showOperator && '+') : number}
        </Text>
    </Pressable>
)

export default function CreateDetailedItemModalScreen({ route, navigation }) {
    const { username, list_id, list_item_id } = route.params;
    const styles = useStyles(getStyles);
    const dispatch = useDispatch();

    const [active, setActive] = useState('Repetitions');
    const [rep, setRep] = useState(0);
    const [weight, setWeight] = useState(0);

    function handleSubmit() {
        dispatch(thunkCreateDetailedExerciseListItem({ 
            payload: { 
                username, 
                list_id, 
                list_item_id, 
                detailed_exercise_list_item: {
                    time: new Date().toISOString(),
                    rep, 
                    weight
                }
            }
        }))
        navigation.goBack();
    }

    function handleRepCount(value) {
        if (value.toString().length <= 3) {
            setRep(Number(value));
        }
    }

    function handleWeight(value) {
        if (value.toString().length <= 4) {
            setWeight(Number(value));
        }
    }

    function handleInputButton(type, field, number) {
        switch(field) {
            case 'Repetitions': {
                if (type == 'increase') {
                    handleRepCount(rep + number);
                }
                if (type == 'decrease') {
                    if (rep && (rep - number >= 0)) {
                        handleRepCount(rep - number);
                    }
                }
                break;
            }
            case 'Weight': {
                if (type == 'increase') {
                    handleWeight(weight + number);
                }
                if (type == 'decrease') {
                    if (weight && (weight - number >= 0)) {
                        handleWeight(weight - number);
                    }
                }
                break;
            }
        }
    }

    function handleRemove() {
        if (active == 'Repetitions') {
            let buff = rep.toString();
            handleRepCount(buff.slice(0, buff.length - 1))
        }
        if (active == 'Weight') {
            let buff = weight.toString();
            handleWeight(buff.slice(0, buff.length - 1))
        }
    }

    function handleNumberPress(number) {
        if (active == 'Repetitions') {
            handleRepCount(rep.toString() + number);
        }
        if (active == 'Weight') {
            handleWeight(weight.toString() + number);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
            </View>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <FontAwesome6 
                        name={active == 'Weight' ? 'weight-hanging' : 'repeat' } 
                        size={14} 
                        color={styles.primaryColor} 
                    />
                    <Text style={styles.header}>{active}</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <Pressable 
                        onPress={() => setActive('Repetitions')}
                        style={[
                            styles.input,
                            {
                                borderColor: active == 'Repetitions' ? styles.primaryColor : styles.greyColor
                            }
                        ]}
                    >
                            <InputButton 
                                type='decrease' 
                                number={1} 
                                styles={styles}
                                showOperator={true}
                                onPress={({ type, number }) => handleInputButton(type, 'Repetitions', number)}
                            />
                            <Text style={styles.inputTitle}>{rep} rep</Text>
                            <InputButton 
                                type='increase' 
                                number={1} 
                                styles={styles}
                                showOperator={true}
                                onPress={({ type, number }) => handleInputButton(type, 'Repetitions', number)}
                            />
                    </Pressable>
                    <Pressable
                        onPress={() => setActive('Weight')}
                        style={[
                            styles.input,
                            {
                                borderColor: active == 'Weight' ? styles.primaryColor : styles.greyColor
                            }
                        ]}
                    >
                        <View style={styles.inputButtonsContainer}>
                            <InputButton 
                                type='decrease' 
                                number={5} 
                                styles={styles}
                                showOperator={true}
                                onPress={({ type, number }) => handleInputButton(type, 'Weight', number)}
                            />
                            <InputButton 
                                type='decrease' 
                                number={1} 
                                styles={styles}
                                showOperator={false}
                                onPress={({ type, number }) => handleInputButton(type, 'Weight', number)}
                            />
                        </View>
                        <Text style={styles.inputTitle}>{weight} kg</Text>
                        <View style={styles.inputButtonsContainer}>
                            <InputButton 
                                type='increase' 
                                number={1} 
                                styles={styles}
                                showOperator={false}
                                onPress={({ type, number }) => handleInputButton(type, 'Weight', number)}
                            />
                            <InputButton 
                                type='increase' 
                                number={5} 
                                styles={styles}
                                showOperator={true}
                                onPress={({ type, number }) => handleInputButton(type, 'Weight', number)}
                            />
                        </View>
                    </Pressable>
                </View>
                <CustomButton
                    text='Record Set'
                    textStyle={styles.submitButtonText}
                    buttonStyle={styles.submitButton}
                    onPress={handleSubmit}
                />
                <View style={styles.numberButtonsContainer}>
                    <NumbersInput
                        onNumberPress={handleNumberPress}
                        onRemove={handleRemove}
                    />
                </View>
            </View>
        </View>
    )
}