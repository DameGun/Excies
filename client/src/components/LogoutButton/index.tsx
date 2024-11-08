import { useAppDispatch } from '@/hooks/redux';
import { thunkLogout } from '@/redux/slices/auth/thunks';

import { CustomHeaderButton } from '../CustomHeaderButton';

export function LogoutButton() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(thunkLogout());
  };
  return <CustomHeaderButton onPress={handleLogout}>Log out</CustomHeaderButton>;
}
