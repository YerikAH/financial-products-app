import {useEffect} from 'react';
import {useFetch} from '../../../hooks';
import {getProduct} from '../../../services';
import {useRoute} from '@react-navigation/native';
import {ProductDetailSekeleton} from './ProductDetailSkeleton';
import {ProductDetailContainer} from './ProductDetailContainer';
import {AlertMessages} from '../../shared';
import {BugAntIcon} from 'react-native-heroicons/solid';
import {getErrorMessage} from '../../../utils';
import {useAppDispatch, useAppSelector} from '../../../redux/hook';
import {setProduct} from '../../../redux/features/productsSlice';

export const ProductDetailInfo = () => {
  const route = useRoute();
  const {data, error, loader, fetchData} = useFetch(getProduct);
  const {product} = useAppSelector(state => state.productsReducer);
  const dispath = useAppDispatch();

  useEffect(() => {
    const {id}: {id?: string} = route.params ?? {};
    fetchData(id);
  }, [route.params]);

  useEffect(() => {
    if (data !== null) {
      dispath(setProduct(data));
    }
  }, [data, loader, error]);

  if (!loader && data !== null && !error.error) {
    return (
      <ProductDetailContainer
        date_release={product.date_release!}
        date_revision={product.date_revision!}
        description={product.description!}
        name={product.name!}
        logo={product.logo!}
        id={product.id!}
      />
    );
  } else if (!loader && error.error && data === null) {
    return (
      <AlertMessages
        icon={BugAntIcon}
        title="Sucedio un error"
        text={getErrorMessage(error.status)}
      />
    );
  } else {
    return <ProductDetailSekeleton />;
  }
};
