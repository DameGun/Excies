import { TextInput, View, Text, Image } from 'react-native';
import { styles } from './styles.js';
import { useTheme } from '@react-navigation/native';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { loginSchema } from './validation.js';
import validate from '../../helpers/customValidator.js';

export default function LoginScreen() {
    const theme = useTheme();
    const colors = theme.colors;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [errors, setErrors] = useState({
        submit: false,
        messages: {}
    });

    useEffect(() => {
        if(errors.submit) {
            console.log('submitting');
        }
    }, [errors])

    async function handleSubmit() {
        setErrors(await validate({ username, password }, loginSchema))
    }

    return(
        <View style={styles.container}>
            <Image 
                source={
                    theme.isDark ? require('../../assets/auth-logo-white.png') : require('../../assets/auth-logo-black.png')
                }
                style={styles.logo}
            />
            <TextInput
                style={{ ...styles.input, borderColor: colors.grey, color: colors.text }}
                placeholder='Username'
                textContentType='username'
                onChangeText={setUsername}
            />
            <TextInput
                style={{ ...styles.input, borderColor: colors.grey, color: colors.text }}
                placeholder='Password'
                secureTextEntry={true} 
                textContentType='password'
                onChangeText={setPassword}
            />
            <Text style={styles.error}>{errors.messages.common}</Text>
            <Button 
                textStyle={{ fontSize: 16 }} 
                buttonStyle={{ marginTop: 15, width: styles.input.width }} 
                text='Login'
                onPress={handleSubmit} 
                />
        </View>
    )
}