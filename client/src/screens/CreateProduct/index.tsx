import {PageLayout} from '../../components/shared';
import {CreateProductForm} from '../../components/CreateProduct';
import {useBackHandler} from '../../hooks';
import {Routes} from '../../navigation/routes';

export function CreateProduct() {
  useBackHandler(Routes.Home);
  return (
    <PageLayout routeBack={Routes.Home}>
      <CreateProductForm />
    </PageLayout>
  );
}
