import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomInput, ModalLoader, ModalWarning} from '../../shared';
import {FieldErrors, SubmitHandler, useForm} from 'react-hook-form';
import inputFields from './inputFields';
import {Product} from '../../../models/data';
import {updateProduct} from '../../../services';
import {red} from '../../../colors';
import {FormActions} from './FormActions';
import {
  useFetch,
  useModalWarning,
  useThemedStyles,
  useInitialize,
} from '../../../hooks';
import {useRoute} from '@react-navigation/native';
import {useAppSelector} from '../../../redux/hook';

export const UpdateProductForm = () => {
  const {dynamicStyles} = useThemedStyles();
  const initialize = useInitialize();
  const {product} = useAppSelector(state => state.productsReducer);
  const route = useRoute();
  const {id}: {id?: string} = route.params ?? {};
  const {data, error, fetchData, loader} = useFetch(updateProduct);
  const {open, toggleOpen, updateProps, props} = useModalWarning();
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<Product>({
    defaultValues: product,
  });

  const onSubmit: SubmitHandler<Product> = dataForm => {
    fetchData({...dataForm, id});
    handleReset();
  };
  const handleSubmitForm = handleSubmit(onSubmit);
  const handleReset = () => reset(product);

  useEffect(() => {
    if (error.error && !loader) {
      const newProps = {
        buttonBgColor: red[700],
        activeButtonBgColor: red[600],
        message: `¡Oops! Algo salió mal. El servidor respondió con un error [${error.status}]. Detalles: [${error.message}].`,
        title: 'Sucedio un error',
        textColorButton: '#fff',
      };
      updateProps(newProps);
    } else if (!error.error && !loader && data !== null) {
      const newProps = {
        buttonBgColor: '#16a34a',
        activeButtonBgColor: '#22c55e',
        message: 'Tu producto se ha actualizado correctamente.',
        title: 'Producto actualizado exitosamente',
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
        title="Actualizando producto"
        message="Estamos actualizando tu producto, esto toará un momento"
      />
      <Text style={[styles.title, dynamicStyles.color]}>
        Formulario de Actualización
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
