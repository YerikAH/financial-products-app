import {useEffect} from 'react';
import {PageLayout} from '../../components/shared';
import {ProductAddButton, ProductBrowser} from '../../components/Home';
import {useFetch} from '../../hooks';
import {useAppDispatch} from '../../redux/hook';
import {
  setError,
  setLoader,
  setProducts,
} from '../../redux/features/productsSlice';
import {getProducts} from '../../services';

export function Home() {
  const {data, error, fetchData, loader} = useFetch(getProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(setLoader(loader));

    if (error.error) {
      dispatch(setError(error));
    }
    if (!loader && data !== null) {
      dispatch(setProducts(data.data));
    }
  }, [loader, error, data, dispatch]);
  return (
    <>
      <PageLayout>
        <ProductBrowser />
      </PageLayout>
      <ProductAddButton />
    </>
  );
}
