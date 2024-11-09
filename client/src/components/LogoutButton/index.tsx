import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/hooks/redux';
import { thunkLogout } from '@/redux/slices/auth/thunks';

import { CustomHeaderButton } from '../CustomHeaderButton';

export function LogoutButton() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(thunkLogout());
  };
  return <CustomHeaderButton onPress={handleLogout}>{t('auth.logoutButton')}</CustomHeaderButton>;
}
