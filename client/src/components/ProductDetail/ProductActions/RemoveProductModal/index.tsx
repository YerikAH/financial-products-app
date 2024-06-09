import {Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {CustomButton, ModalLoader, ModalWarning} from '../../../shared';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {charade, red, woodsmoke} from '../../../../colors';
import {deleteProduct} from '../../../../services';
import {useEffect} from 'react';
import {Routes} from '../../../../navigation/routes';
import {
  useAppNavigation,
  useFetch,
  useModalWarning,
  useThemedStyles,
  useInitialize,
} from '../../../../hooks';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  id: string;
}
export const RemoveProductModal = ({setOpen, open, id}: Props) => {
  const initialize = useInitialize();
  const {dynamicStyles, isDarkMode} = useThemedStyles();
  const {data, error, loader, fetchData} = useFetch(deleteProduct);
  const {open: openModal, toggleOpen, updateProps, props} = useModalWarning();
  const {navigateTo} = useAppNavigation();

  const handleRemove = () => fetchData(id);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (error.error && !loader) {
      const newProps = {
        buttonBgColor: red[700],
        activeButtonBgColor: red[600],
        message: `¡Oops! Algo salió mal. El servidor respondió con un error [${error.status}]. Detalles: [${error.message}].`,
        title: 'Sucedio un error',
      };
      updateProps(newProps);
    } else if (!error.error && !loader && data !== null) {
      const newProps = {
        buttonBgColor: '#16a34a',
        activeButtonBgColor: '#22c55e',
        message:
          'Tu producto se ha eliminado correctamente. Redirigiendo en 5 segundos.',
        title: 'Producto eliminado exitosamente',
      };
      updateProps(newProps);
      initialize();
      setTimeout(() => {
        navigateTo(Routes.Home);
      }, 5000);
    }
  }, [loader, error]);

  return (
    <>
      <ModalWarning
        open={openModal}
        toggleOpen={toggleOpen}
        buttonBgColor={props.buttonBgColor}
        activeButtonBgColor={props.activeButtonBgColor}
        message={props.message}
        title={props.title}
      />
      <ModalLoader
        open={loader}
        title="Eliminando producto"
        message="Estamos eliminando tu producto, esto toará un momento"
      />
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={open}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, dynamicStyles.colorLow]}>
            <View style={styles.containerButton}>
              <TouchableHighlight
                onPress={handleClose}
                style={styles.buttonIcon}
                underlayColor={isDarkMode ? woodsmoke[800] : charade[200]}>
                <XMarkIcon
                  size={24}
                  strokeWidth={2}
                  style={dynamicStyles.icon}
                />
              </TouchableHighlight>
            </View>
            <Text
              style={[
                styles.modalText,
                dynamicStyles.card,
                dynamicStyles.color,
                dynamicStyles.colorLow,
              ]}>
              ¿Estás seguro de eliminar el producto "Nombre del producto" ?
            </Text>
            <View style={styles.buttons}>
              <CustomButton action={handleRemove} text="Confirmar" />
              <CustomButton
                action={handleClose}
                text="Cancelar"
                backgroundColor={charade[200]}
                activeBackgroundColor={charade[100]}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'relative',
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    shadowRadius: 4,
  },
  modalText: {
    width: '100%',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'UbuntuSans-SemiBold',
    fontSize: 18,
    paddingVertical: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  containerButton: {
    flex: 1,
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  buttons: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 32,
    rowGap: 8,
    paddingBottom: 16,
  },
  buttonIcon: {
    padding: 4,
    borderRadius: 3,
  },
});
