import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { CustomButton, CustomTextInput } from '@/components';
import { useAppDispatch } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { thunkLogin } from '@/redux/slices/auth/thunks';

import { AuthLayout } from './AuthLayout';
import { getStyles } from './styles';
import { loginSchema } from './validation';

export function LoginScreen() {
  const dispatch = useAppDispatch();
  const styles = useStyles(getStyles);

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
        placeholder='Username'
        textContentType='username'
      />
      <CustomTextInput
        name='password'
        control={control}
        placeholder='Password'
        secureTextEntry={true}
        textContentType='password'
      />
      <CustomButton
        type='submit'
        textStyle={styles.buttonText}
        buttonStyle={styles.button}
        onPress={onSubmit}
      >
        Login
      </CustomButton>
    </AuthLayout>
  );
}
