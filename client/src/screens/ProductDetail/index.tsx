import {
  ProductActions,
  ProductDetailInfo,
} from '../../components/ProductDetail';
import {PageLayout} from '../../components/shared';
import {useBackHandler} from '../../hooks';
import {Routes} from '../../navigation/routes';

export const ProductDetail = () => {
  useBackHandler(Routes.Home);
  return (
    <>
      <PageLayout routeBack={Routes.Home}>
        <ProductDetailInfo />
      </PageLayout>
      <ProductActions />
    </>
  );
};
