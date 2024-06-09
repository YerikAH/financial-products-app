import {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {RootStackParamList, Routes} from '../navigation/routes';
import {useAppNavigation} from './useAppNavigation';

export const useBackHandler = <T extends keyof RootStackParamList>(
  route: Routes,
  params?: RootStackParamList[T],
) => {
  const {navigateTo} = useAppNavigation();
  useEffect(() => {
    const backAction = () => {
      if (params !== undefined) {
        navigateTo(route, params);
        return true;
      } else {
        navigateTo(route);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigateTo, route]);
};
