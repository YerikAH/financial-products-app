import {PageLayout} from '../../components/shared';
import {Routes} from '../../navigation/routes';
import {useBackHandler} from '../../hooks';
import {UpdateProductForm} from '../../components/UpdateProduct';
import {useRoute} from '@react-navigation/native';

export function UpdateProduct() {
  const route = useRoute();
  const {id}: {id?: string} = route.params ?? {};
  useBackHandler(Routes.ProductDetail, {id: id!});
  return (
    <PageLayout routeBack={Routes.ProductDetail} routeParams={{id: id!}}>
      <UpdateProductForm />
    </PageLayout>
  );
}
