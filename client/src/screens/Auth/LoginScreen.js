import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { useTheme } from '@react-navigation/native';

import { styles } from './styles.js';
import { loginSchema } from './validation.js';

import { CustomButton, CustomTextInput } from '../../components';
import { validate } from '../../helpers/validate.js';
import { thunkLogin } from '../../redux/slices/authSlice.js';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const { dark } = useTheme();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    submit: false,
    messages: {},
  });

  useEffect(() => {
    if (errors.submit) {
      dispatch(thunkLogin({ payload: { username, password } }));
    }
  }, [errors]);

  async function handleSubmit() {
    setErrors(await validate({ username, password }, loginSchema));
  }

  return (
    <View style={styles.container}>
      <Image
        source={
          dark
            ? require('../../assets/auth-logo-white.png')
            : require('../../assets/auth-logo-black.png')
        }
        style={styles.logo}
      />
      <CustomTextInput
        style={styles.input}
        placeholder='Username'
        textContentType='username'
        onChangeText={setUsername}
      />
      <CustomTextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        textContentType='password'
        onChangeText={setPassword}
      />
      <Text style={styles.error}>{errors.messages.common}</Text>
      <CustomButton
        type='submit'
        textStyle={styles.buttonText}
        buttonStyle={{ ...styles.button, width: styles.input.width }}
        text='Login'
        onPress={handleSubmit}
      />
    </View>
  );
}
