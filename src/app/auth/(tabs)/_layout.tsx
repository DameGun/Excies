import { Icons } from '@/constants/icons';
import { useGetBottomTabOptions } from '@/hooks/useGetBottomTabOptions';
import { Tabs } from 'expo-router';

export default function AuthTabLayout() {
  const bottomTabOptions = useGetBottomTabOptions();

  return (
    <Tabs>
      <Tabs.Screen name='login' options={bottomTabOptions('Login', Icons.Login)} />
      <Tabs.Screen name='register' options={bottomTabOptions('Register', Icons.Register)} />
    </Tabs>
  );
}
