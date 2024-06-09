import {FloatingGroupButton} from '../../../shared';
import {charade} from '../../../../colors';

interface Props {
  handleReset: () => void;
  handleSubmit: () => void;
}
export const FormActions = ({handleReset, handleSubmit}: Props) => {
  const buttons = [
    {
      text: 'Enviar',
      action: handleSubmit,
    },
    {
      text: 'Reiniciar',
      action: handleReset,
      backgroundColor: charade[200],
      activeBackgroundColor: charade[100],
    },
  ];
  return <FloatingGroupButton buttons={buttons} />;
};
