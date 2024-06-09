import {StyleSheet, Text, View} from 'react-native';
import {CustomInput} from '../../shared';
import {Control, FieldErrors} from 'react-hook-form';
import inputFields from './inputFields';
import {useThemedStyles} from '../../../hooks';
import {Product} from '../../../models/data';

interface Props {
  control: Control<Product>;
  errors: FieldErrors<Product>;
}

export const CreateProductForm = ({control, errors}: Props) => {
  const {dynamicStyles} = useThemedStyles();
  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'ChivoMono-SemiBold',
    fontSize: 20,
  },
  inputsContainer: {
    marginBottom: 64,
  },
});
