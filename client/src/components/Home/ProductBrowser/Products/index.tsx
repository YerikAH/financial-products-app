import {StyleSheet, View} from 'react-native';
import {CardProduct} from './CardProduct';
import {useThemedStyles} from '../../../../hooks';
import {useAppSelector} from '../../../../redux/hook';
import {AlertMessages, Skeleton} from '../../../shared';
import {BugAntIcon, FolderIcon} from 'react-native-heroicons/solid';
import {useEffect, useState} from 'react';

export const Products = () => {
  const {dynamicStyles} = useThemedStyles();
  const {loader, products, error} = useAppSelector(
    state => state.productsReducer,
  );
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!loader && !hasLoaded) {
      setHasLoaded(true);
    } else {
      setHasLoaded(false);
    }
  }, [loader]);
  return (
    <>
      {loader && !error.error && (
        <Skeleton height={150} width={50} style={styles.skeleton} />
      )}
      {!loader && error.error && (
        <AlertMessages
          icon={BugAntIcon}
          title="Sucedio un error"
          text={`¡Oops! Algo salió mal. El servidor respondió con un error [${error.status}]. Detalles: [${error.message}].`}
        />
      )}
      {!loader && !error.error && products.length === 0 && !hasLoaded && (
        <AlertMessages
          icon={FolderIcon}
          title="No se encontraron productos"
          text="Actualmente no se encontraron productos. Agrega nuevos productos para visualizarlos aquí."
        />
      )}
      {!loader && !error.error && products.length > 0 && (
        <View style={[styles.containerProducts, dynamicStyles.card]}>
          {products.map(item => (
            <CardProduct key={item.id} id={item.id} name={item.name} />
          ))}
        </View>
      )}
    </>
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
  skeleton: {
    borderRadius: 4,
    overflow: 'hidden',
    width: '100%',
    marginTop: 16,
  },
});
