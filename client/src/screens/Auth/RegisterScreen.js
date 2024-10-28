import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { useTheme } from '@react-navigation/native';

import { styles } from './styles.js';
import { registerSchema } from './validation.js';

import { CustomButton, CustomTextInput } from '../../components';
import { validate } from '../../helpers/validate.js';
import { thunkRegister } from '../../redux/slices/authSlice.js';

export default function RegisterScreen() {
  const { dark } = useTheme();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    submit: false,
    messages: {},
  });

  useEffect(() => {
    if (errors.submit) {
      dispatch(thunkRegister({ payload: { username, password } }));
    }
  }, [errors]);

  async function handleSubmit() {
    if (password !== confirmPassword) {
      setErrors({
        submit: false,
        messages: {
          common: 'Password and confirm password should match',
        },
      });

      return;
    }
    setErrors(await validate({ username, password }, registerSchema));
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
        placeholder='Email (Optional)'
        textContentType='emailAddress'
        onChangeText={setEmail}
      />
      <CustomTextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        textContentType='password'
        onChangeText={setPassword}
      />
      <CustomTextInput
        style={styles.input}
        placeholder='Confirm password'
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
      />
      <Text style={styles.error}>{errors.messages.common}</Text>
      <CustomButton
        type='submit'
        textStyle={styles.buttonText}
        buttonStyle={{ ...styles.button, width: styles.input.width }}
        text='Register'
        onPress={handleSubmit}
      />
    </View>
  );
}
