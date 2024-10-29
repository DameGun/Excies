import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { CustomButton, CustomTextInput } from '@/components';
import { useAppDispatch } from '@/hooks/redux';
import { thunkLogin } from '@/redux/slices/auth/thunks';

import { AuthLayout } from './AuthLayout';
import { styles } from './styles';
import { loginSchema } from './validation';

export default function LoginScreen() {
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = handleSubmit((data) => dispatch(thunkLogin(data)));

  return (
    <AuthLayout>
      <CustomTextInput
        name='username'
        control={control}
        style={styles.input}
        placeholder='Username'
        textContentType='username'
      />
      <CustomTextInput
        name='password'
        control={control}
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        textContentType='password'
      />
      <CustomButton
        type='submit'
        textStyle={styles.buttonText}
        buttonStyle={{ ...styles.button, width: styles.input.width }}
        onPress={onSubmit}
      >
        Login
      </CustomButton>
    </AuthLayout>
  );
}
