import {useState} from 'react';
import {charade, red} from '../../../colors';
import {FloatingGroupButton} from '../../shared';
import {RemoveProductModal} from './RemoveProductModal';
import {useRoute} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {useAppNavigation, useThemedStyles} from '../../../hooks';
import {Routes} from '../../../navigation/routes';

export const ProductActions = () => {
  const route = useRoute();
  const {id}: {id?: string} = route.params ?? {};
  const [openModal, setOpenModal] = useState(false);
  const {dynamicStyles} = useThemedStyles();
  const {navigateTo} = useAppNavigation();

  const handleRemove = () => setOpenModal(true);
  const handleEdit = () => navigateTo(Routes.UpdateProduct, {id: id ?? ''});

  const buttons = [
    {
      text: 'Editar',
      action: handleEdit,
      backgroundColor: charade[200],
      activeBackgroundColor: charade[100],
    },
    {
      text: 'Eliminar',
      action: handleRemove,
      backgroundColor: red[700],
      activeBackgroundColor: red[600],
      textColor: '#fff',
    },
  ];
  return (
    <View style={[styles.container, dynamicStyles.colorLow]}>
      <FloatingGroupButton buttons={buttons} />
      <RemoveProductModal
        id={id ?? ''}
        open={openModal}
        setOpen={setOpenModal}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
});
