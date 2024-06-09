import {FloatingGroupButton} from '../../shared';
import {Routes} from '../../../navigation/routes';
import {useAppNavigation, useThemedStyles} from '../../../hooks';
import {StyleSheet, View} from 'react-native';

export const ProductAddButton = () => {
  const {navigateTo} = useAppNavigation();
  const {dynamicStyles} = useThemedStyles();
  const handleAddProduct = () => navigateTo(Routes.CreateProduct);
  const buttons = [
    {
      text: 'Agregar',
      action: handleAddProduct,
    },
  ];
  return (
    <View style={[styles.container, dynamicStyles.colorLow]}>
      <FloatingGroupButton buttons={buttons} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
});
