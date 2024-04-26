import { useStyles } from "../../helpers/customHooks";
import { getStyles } from "./styles";
import { Button, Keyboard, TextInput, View } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

export default function Search({ clicked, searchPhrase, setSearchPhrase, setClicked }) {
    const styles = useStyles(getStyles);

    return (
        <View style={styles.container}>
           <View style={
            clicked 
                ? styles.searchBar_clicked
                : styles.searchBar_unclicked
           }>
            <Feather name="search" size={20} color="white" style={ clicked && styles.iconLeft_clicked }/>
                <TextInput
                    placeholder="Search"
                    style={
                        clicked
                            ? styles.input_clicked
                            : styles.input
                    }
                    placeholderTextColor={styles.placeholderTextColor}
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true)
                    }}
                />
                {clicked && (
                    <Entypo 
                        name="cross" 
                        size={20} 
                        color="white"
                        style={styles.iconRight_clicked}
                        onPress={() => {
                            setSearchPhrase('')
                        }}/>
                )}
           </View>
           {clicked && (
            <View>
                <Button
                    title="Cancel"
                    color={styles.buttonColor}
                    onPress={() => {
                        Keyboard.dismiss();
                        setClicked(false)
                    }} 
                />
            </View>
           )}
        </View>
    )
}