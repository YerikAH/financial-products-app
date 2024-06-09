import {StyleSheet, View} from 'react-native';
import {CardProduct} from './CardProduct';
import {useThemedStyles} from '../../../../hooks';
import {useAppSelector} from '../../../../redux/hook';
import {AlertMessages, Skeleton} from '../../../shared';
import {BugAntIcon, FolderIcon} from 'react-native-heroicons/solid';
import {getErrorMessage} from '../../../../utils';

export const Products = () => {
  const {dynamicStyles} = useThemedStyles();
  const {loader, saveProducts, error} = useAppSelector(
    state => state.productsReducer,
  );

  if (loader) {
    return <Skeleton height={150} width={50} style={styles.skeleton} />;
  } else if (!loader && error.error) {
    return (
      <AlertMessages
        icon={BugAntIcon}
        title="Sucedio un error"
        text={getErrorMessage(error.status)}
      />
    );
  } else if (!loader && !error.error && saveProducts.length === 0) {
    return (
      <AlertMessages
        icon={FolderIcon}
        title="No se encontraron productos"
        text="Actualmente no se encontraron productos. Agrega nuevos productos para visualizarlos aquí."
      />
    );
  } else if (!loader && !error.error && saveProducts.length > 0) {
    return (
      <View style={[styles.containerProducts, dynamicStyles.card]}>
        {saveProducts.map((item, idx) => (
          <CardProduct
            key={item.id}
            id={item.id}
            name={item.name}
            last={idx === saveProducts.length - 1}
          />
        ))}
      </View>
    );
  }
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
  skeleton: {
    borderRadius: 4,
    overflow: 'hidden',
    width: '100%',
    marginTop: 16,
  },
});
