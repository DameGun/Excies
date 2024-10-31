import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { CustomButton, CustomTextInput } from '@/components';
import { useAppDispatch } from '@/hooks/redux';
import { thunkRegister } from '@/redux/slices/auth/thunks';

import { AuthLayout } from './AuthLayout';
import { styles } from './styles';
import { registerSchema } from './validation';

export function RegisterScreen() {
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = handleSubmit((data) => dispatch(thunkRegister(data)));

  return (
    <AuthLayout>
      <CustomTextInput
        control={control}
        name='username'
        style={styles.input}
        placeholder='Username'
        textContentType='username'
      />
      <CustomTextInput
        control={control}
        name='email'
        style={styles.input}
        placeholder='Email (Optional)'
        textContentType='emailAddress'
      />
      <CustomTextInput
        control={control}
        name='password'
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        textContentType='password'
      />
      <CustomTextInput
        control={control}
        name='confirmPassword'
        style={styles.input}
        placeholder='Confirm password'
        secureTextEntry={true}
      />
      <CustomButton
        type='submit'
        textStyle={styles.buttonText}
        buttonStyle={{ ...styles.button, width: styles.input.width }}
        onPress={onSubmit}
      >
        Register
      </CustomButton>
    </AuthLayout>
  );
}
