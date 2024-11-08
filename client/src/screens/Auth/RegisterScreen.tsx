import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { CustomButton, CustomTextInput } from '@/components';
import { useAppDispatch } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { thunkRegister } from '@/redux/slices/auth/thunks';

import { AuthLayout } from './AuthLayout';
import { getStyles } from './styles';
import { registerSchema } from './validation';

export function RegisterScreen() {
  const dispatch = useAppDispatch();
  const styles = useStyles(getStyles);

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
        placeholder='Username'
        textContentType='username'
      />
      <CustomTextInput
        control={control}
        name='email'
        placeholder='Email (Optional)'
        textContentType='emailAddress'
      />
      <CustomTextInput
        control={control}
        name='password'
        placeholder='Password'
        secureTextEntry={true}
        textContentType='password'
      />
      <CustomTextInput
        control={control}
        name='confirmPassword'
        placeholder='Confirm password'
        secureTextEntry={true}
      />
      <CustomButton
        type='submit'
        textStyle={styles.buttonText}
        buttonStyle={styles.button}
        onPress={onSubmit}
      >
        Register
      </CustomButton>
    </AuthLayout>
  );
}
