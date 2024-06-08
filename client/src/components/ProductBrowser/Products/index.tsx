import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardProduct} from './CardProduct';
import {getDynamicStyles} from '../../../colors';
import {useTheme} from '../../../context/ThemeContext';

export const Products = () => {
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';
  const dynamicStyles = getDynamicStyles(isDarkMode);
  return (
    <View style={[styles.containerProducts, dynamicStyles.card]}>
      <CardProduct />
      <CardProduct />
    </View>
  );
};

const styles = StyleSheet.create({
  containerProducts: {
    marginTop: 16,
    marginBottom: 124,
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
});
