import type { Route } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export function showBottomTab(route?: Partial<Route<string>>) {
  if (route) {
    return getFocusedRouteNameFromRoute(route) === 'CreateDetailedItemModalScreen' ? false : true;
  }
  return true;
}
