import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Products} from './Products';
import {SearchProduct} from './SearchProduct';
import {useTheme} from '../../context/ThemeContext';
import {getDynamicStyles} from '../../colors';
import {ProductAddButton} from './ProductAddButton';

export const ProductBrowser = () => {
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';
  const dynamicStyles = getDynamicStyles(isDarkMode);
  return (
    <React.Fragment>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.main, dynamicStyles.colorLow]}>
        <SearchProduct />
        <Products />
      </ScrollView>
      <ProductAddButton />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 32,
    paddingTop: 16,
  },
});
