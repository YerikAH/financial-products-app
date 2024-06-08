import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../../shared';

export const ProductAddButton = () => {
  const handleAddProduct = () => {};
  return (
    <View style={styles.container}>
      <CustomButton text="Agregar" action={handleAddProduct} />
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
  },
});
