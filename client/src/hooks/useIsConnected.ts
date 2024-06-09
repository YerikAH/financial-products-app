import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useIsConnected = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setIsConnected(
        state.isInternetReachable === null ? false : state.isInternetReachable,
      );
    });
  }, []);
  return isConnected;
};
