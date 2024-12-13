import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';

import { CustomButton, CustomTextInput } from '@/components';
import { useAppDispatch } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { thunkRegister } from '@/redux/slices/auth/thunks';
import type { RegisterDTO } from '@/types/auth';
import { getUserLocales } from '@/utils/getUserLocale';

import { AuthLayout } from './AuthLayout';
import { getStyles } from './styles';
import { registerSchema } from './validation';

export function RegisterScreen() {
  const dispatch = useAppDispatch();
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const payload: RegisterDTO = {
      ...data,
      isMetricSystemChoosed: getUserLocales().measurementSystem === 'metric',
    };
    dispatch(thunkRegister(payload));
  });

  return (
    <AuthLayout>
      <CustomTextInput
        control={control}
        name='username'
        placeholder={t('auth.inputs.username')}
        textContentType='username'
      />
      <CustomTextInput
        control={control}
        name='email'
        placeholder={t('auth.inputs.email')}
        textContentType='emailAddress'
      />
      <CustomTextInput
        control={control}
        name='password'
        placeholder={t('auth.inputs.password')}
        secureTextEntry={true}
        textContentType='password'
      />
      <CustomTextInput
        control={control}
        name='confirmPassword'
        placeholder={t('auth.inputs.confirmPassword')}
        secureTextEntry={true}
      />
      <CustomButton
        type='submit'
        textStyle={styles.buttonText}
        buttonStyle={styles.button}
        onPress={onSubmit}
      >
        {t('auth.registerButton')}
      </CustomButton>
    </AuthLayout>
  );
}
