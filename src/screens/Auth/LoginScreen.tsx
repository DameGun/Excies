import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
        placeholder={t('auth.inputs.username')}
        textContentType='username'
      />
      <CustomTextInput
        name='password'
        control={control}
        placeholder={t('auth.inputs.password')}
        secureTextEntry={true}
        textContentType='password'
      />
      <CustomButton
        type='submit'
        textStyle={styles.buttonText}
        buttonStyle={styles.button}
        onPress={onSubmit}
      >
        {t('auth.loginButton')}
      </CustomButton>
    </AuthLayout>
  );
}
