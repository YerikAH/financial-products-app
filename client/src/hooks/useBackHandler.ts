import {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {Routes} from '../navigation/routes';
import {useAppNavigation} from './useAppNavigation';

export const useBackHandler = (route?: Routes) => {
  const {navigateTo} = useAppNavigation();
  useEffect(() => {
    const backAction = () => {
      if (route !== undefined) {
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
