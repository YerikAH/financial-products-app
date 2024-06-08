import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CustomInput} from '../../shared';
import {Control, FieldErrors} from 'react-hook-form';
import {FormData} from '../../../types';
import inputFields from './inputFields';
import {getDynamicStyles} from '../../../colors';
import {useTheme} from '../../../context/ThemeContext';

interface FormProps {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

export const Form = ({control, errors}: FormProps) => {
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';
  const dynamicStyles = getDynamicStyles(isDarkMode);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[styles.main, dynamicStyles.colorLow]}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 32,
    paddingTop: 16,
  },
  title: {
    fontFamily: 'ChivoMono-SemiBold',
    fontSize: 20,
  },
  inputsContainer: {
    marginBottom: 250,
  },
});
