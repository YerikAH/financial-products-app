import {useEffect} from 'react';
import {getProducts} from '../services';
import {useFetch} from './useFetch';
import {useAppDispatch} from '../redux/hook';
import {
  setError,
  setLoader,
  setProducts,
} from '../redux/features/productsSlice';

export const useInitialize = () => {
  const {loader, error, data, fetchData} = useFetch(getProducts);
  const dispath = useAppDispatch();

  const initialize = () => {
    fetchData();
  };

  useEffect(() => {
    dispath(setLoader(loader));

    if (error.error) {
      dispath(setError(error));
    }

    if (!loader && data !== null) {
      dispath(setProducts(data.data));
    }
  }, [loader, error, data]);
  return initialize;
};
