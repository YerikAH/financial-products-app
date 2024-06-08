import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../../shared';
import {charade} from '../../../colors';

interface FormActionsProps {
  handleReset: () => void;
  handleSubmit: () => void;
}
export const FormActions = ({handleReset, handleSubmit}: FormActionsProps) => {
  return (
    <View style={styles.container}>
      <CustomButton text="Enviar" action={handleSubmit} />
      <CustomButton
        text="Reiniciar"
        action={handleReset}
        backgroundColor={charade[200]}
        activeBackgroundColor={charade[100]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 32,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    flex: 1,
    rowGap: 16,
  },
});
