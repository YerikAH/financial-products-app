import {SubmitHandler, useForm} from 'react-hook-form';
import {PageLayout} from '../../components/shared';
import {CreateProductForm, FormActions} from '../../components/CreateProduct';
import {useBackHandler, useFetch, useModalWarning} from '../../hooks';
import {Routes} from '../../navigation/routes';
import {createProduct} from '../../services';
import {useEffect} from 'react';
import {Product} from '../../models/data';
import {red} from '../../colors';
import {useInitialize} from '../../hooks/useInitialize';
import {ModalLoader} from '../../components/shared/ModalLoader';
import {ModalWarning} from '../../components/shared/ModalWarning';

const defaultValues = {
  id: '',
  product: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
};

export function CreateProduct() {
  const initialize = useInitialize();
  const {data, error, fetchData, loader} = useFetch(createProduct);
  const {open, toggleOpen, updateProps, props} = useModalWarning();
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<Product>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<Product> = dataForm => {
    fetchData(dataForm);
    handleReset();
  };
  const handleSubmitForm = handleSubmit(onSubmit);
  const handleReset = () => reset(defaultValues);

  useEffect(() => {
    if (error.error && !loader) {
      const newProps = {
        buttonBgColor: red[700],
        activeButtonBgColor: red[600],
        message: `¡Oops! Algo salió mal. El servidor respondió con un error [${error.status}]. Detalles: [${error.message}].`,
        title: 'Sucedio un error',
      };
      updateProps(newProps);
    } else if (!error.error && !loader && data !== null) {
      const newProps = {
        buttonBgColor: '#16a34a',
        activeButtonBgColor: '#22c55e',
        message: 'Tu producto se ha creado correctamente.',
        title: 'Producto creado exitosamente',
      };
      updateProps(newProps);
      initialize();
    }
  }, [loader, error]);

  useBackHandler(Routes.Home);
  return (
    <>
      <ModalWarning
        open={open}
        toggleOpen={toggleOpen}
        buttonBgColor={props.buttonBgColor}
        activeButtonBgColor={props.activeButtonBgColor}
        message={props.message}
        title={props.title}
      />
      <ModalLoader
        open={loader}
        title="Creando producto"
        message="Estamos craendo tu producto, esto toará un momento"
      />
      <PageLayout routeBack={Routes.Home}>
        <CreateProductForm control={control} errors={errors} />
      </PageLayout>
      <FormActions handleReset={handleReset} handleSubmit={handleSubmitForm} />
    </>
  );
}
