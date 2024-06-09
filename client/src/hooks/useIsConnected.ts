import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useIsConnected = () => {
  const [isConnected, setIsConnected] = useState<null | boolean>(null);
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setIsConnected(state.isInternetReachable);
    });
  }, []);
  return isConnected;
};
