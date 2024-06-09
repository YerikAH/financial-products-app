import {useState} from 'react';
import {charade, red} from '../../../colors';
import {FloatingGroupButton} from '../../shared';
import {RemoveProductModal} from './RemoveProductModal';

export const ProductActions = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleRemove = () => setOpenModal(true);
  const handleEdit = () => console.log('Editar');

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
    <>
      <FloatingGroupButton buttons={buttons} />
      <RemoveProductModal id="" open={openModal} setOpen={setOpenModal} />
    </>
  );
};
