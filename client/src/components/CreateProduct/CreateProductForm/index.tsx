import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomInput, ModalLoader, ModalWarning} from '../../shared';
import {FieldErrors, SubmitHandler, useForm} from 'react-hook-form';
import inputFields from './inputFields';
import {Product} from '../../../models/data';
import {createProduct} from '../../../services';
import {green, red, white} from '../../../colors';
import {FormActions} from './FormActions';
import {
  useFetch,
  useModalWarning,
  useThemedStyles,
  useInitialize,
} from '../../../hooks';

const defaultValues = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
};

export const CreateProductForm = () => {
  const {dynamicStyles} = useThemedStyles();
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
        textColorButton: white,
      };
      updateProps(newProps);
    } else if (!error.error && !loader && data !== null) {
      const newProps = {
        buttonBgColor: green[600],
        activeButtonBgColor: green[500],
        message: 'Tu producto se ha creado correctamente.',
        title: 'Producto creado exitosamente',
      };
      updateProps(newProps);
      initialize();
    }
  }, [loader, error]);
  return (
    <>
      <ModalWarning
        open={open}
        toggleOpen={toggleOpen}
        buttonBgColor={props.buttonBgColor}
        activeButtonBgColor={props.activeButtonBgColor}
        message={props.message}
        title={props.title}
        textColorButton={props.textColorButton}
      />
      <ModalLoader
        open={loader}
        title="Creando producto"
        message="Estamos craendo tu producto, esto toará un momento"
      />
      <Text style={[styles.title, dynamicStyles.color]}>
        Formulario de Registro
      </Text>
      <View style={styles.inputsContainer}>
        {inputFields.map(field => {
          const keyField = field.name as keyof FieldErrors<Product>;
          return (
            <CustomInput
              key={field.name}
              control={control}
              label={field.label}
              name={field.name}
              placeholder={field.placeholder}
              rules={field.rules}
              errorMessage={errors[keyField]?.message}
            />
          );
        })}
      </View>
      <FormActions handleReset={handleReset} handleSubmit={handleSubmitForm} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'ChivoMono-SemiBold',
    fontSize: 20,
  },
  inputsContainer: {
    marginBottom: 16,
  },
});
