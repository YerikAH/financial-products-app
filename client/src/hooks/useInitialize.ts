import {useEffect} from 'react';
import {getProducts} from '../services';
import {useFetch} from './useFetch';
import {useAppDispatch} from '../redux/hook';
import {
  setError,
  setLoader,
  setProducts,
} from '../redux/features/productsSlice';
import {useIsConnected} from './useIsConnected';

export const useInitialize = () => {
  const {loader, error, data, fetchData} = useFetch(getProducts);
  const dispath = useAppDispatch();
  const isConnected = useIsConnected();

  const initialize = () => {
    fetchData();
  };

  useEffect(() => {
    initialize();
  }, [isConnected]);

  useEffect(() => {
    dispath(setLoader(loader));

    if (error.error && !loader) {
      dispath(setError(error));
    } else if (!loader && data !== null) {
      dispath(setProducts(data.data));
      dispath(
        setError({
          error: false,
          status: 0,
          message: '',
        }),
      );
    }
  }, [loader, error]);
  return initialize;
};
