import {useEffect} from 'react';
import {useFetch} from '../../../hooks';
import {getProduct} from '../../../services';
import {useRoute} from '@react-navigation/native';
import {ProductDetailSekeleton} from './ProductDetailSkeleton';
import {ProductDetailContainer} from './ProductDetailContainer';

export const ProductDetailInfo = () => {
  const route = useRoute();
  const {data, error, loader, fetchData} = useFetch(getProduct);

  useEffect(() => {
    const {id}: {id?: string} = route.params ?? {};
    fetchData(id ?? '');
  }, [route.params]);

  if (!loader) {
    return <ProductDetailContainer />;
  } else {
    return <ProductDetailSekeleton />;
  }
};
