import {SubmitHandler, useForm} from 'react-hook-form';
import {PageLayout} from '../../components/shared';
import {CreateProductForm, FormActions} from '../../components/CreateProduct';
import {FormData} from '../../types';
import {useBackHandler} from '../../hooks';
import {Routes} from '../../navigation/routes';
import {ModalWarning} from '../../components/shared/ModalWarning';

const defaultValues = {
  id: '',
  product: '',
  description: '',
  image: '',
  release: '',
  review: '',
};

export function CreateProduct() {
  useBackHandler(Routes.Home);
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormData>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };
  const handleSubmitForm = handleSubmit(onSubmit);
  const handleReset = () => reset(defaultValues);
  return (
    <>
      <PageLayout routeBack={Routes.Home}>
        <>
          <ModalWarning
            open={false}
            toggleOpen={() => {}}
            buttonBgColor="#16a34a"
            activeButtonBgColor="#22c55e"
            message="Bienvenido de nuevo. En 3 segundos tendrás acceso a la aplicación Aromatika."
            title="¡Inicio de sesión exitoso!"
          />
          <CreateProductForm control={control} errors={errors} />
        </>
      </PageLayout>
      <FormActions handleReset={handleReset} handleSubmit={handleSubmitForm} />
    </>
  );
}
