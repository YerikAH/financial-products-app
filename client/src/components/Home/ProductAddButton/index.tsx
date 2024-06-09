import {FloatingGroupButton} from '../../shared';
import {Routes} from '../../../navigation/routes';
import {useAppNavigation} from '../../../hooks';

export const ProductAddButton = () => {
  const {navigateTo} = useAppNavigation();
  const handleAddProduct = () => navigateTo(Routes.CreateProduct);
  const buttons = [
    {
      text: 'Agregar',
      action: handleAddProduct,
    },
  ];
  return <FloatingGroupButton buttons={buttons} />;
};
