import {StyleSheet, Text, View} from 'react-native';
import {CustomInput} from '../../shared';
import {Control, FieldErrors} from 'react-hook-form';
import {FormData} from '../../../types';
import inputFields from './inputFields';
import {useThemedStyles} from '../../../hooks';

interface Props {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
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
          const keyField = field.name as keyof FieldErrors<FormData>;
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
