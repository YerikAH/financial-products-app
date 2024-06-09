import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/routes';

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateTo = <T extends keyof RootStackParamList>(
    screen: T,
    params?: RootStackParamList[T],
  ) => {
    if (params) {
      navigation.navigate(screen as keyof RootStackParamList, params as any);
    } else {
      navigation.navigate(screen as any);
    }
  };

  return {navigateTo};
};
