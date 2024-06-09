import {Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {CustomButton} from '../../../shared';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {charade, woodsmoke} from '../../../../colors';
import {useThemedStyles} from '../../../../hooks';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  id: string;
}
export const RemoveProductModal = ({setOpen, open, id}: Props) => {
  const {dynamicStyles, isDarkMode} = useThemedStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
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
              <XMarkIcon size={24} strokeWidth={2} style={dynamicStyles.icon} />
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
            <CustomButton action={() => {}} text="Confirmar" />
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
