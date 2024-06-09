import {Modal, View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {useThemedStyles} from '../../../hooks';
import {charade, woodsmoke} from '../../../colors';
import {CustomButton} from '../CustomButton';

interface Props {
  toggleOpen: () => void;
  open: boolean;
  title: string;
  message: string;
  buttonBgColor?: string;
  activeButtonBgColor?: string;
  textColorButton?: string;
}

export const ModalWarning = ({
  toggleOpen,
  open,
  title,
  message,
  buttonBgColor,
  activeButtonBgColor,
  textColorButton,
}: Props) => {
  const {dynamicStyles, isDarkMode} = useThemedStyles();
  return (
    <Modal
      visible={open}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}>
      <View style={styles.container}>
        <View style={[styles.modalContent, dynamicStyles.card]}>
          <View style={[styles.closeButtonContainer, styles.padding]}>
            <TouchableHighlight
              style={styles.closeButton}
              onPress={toggleOpen}
              underlayColor={isDarkMode ? woodsmoke[700] : charade[200]}>
              <XMarkIcon size={24} style={dynamicStyles.icon} strokeWidth={2} />
            </TouchableHighlight>
          </View>
          <View style={[styles.modalText, dynamicStyles.card]}>
            <Text style={[styles.title, dynamicStyles.color]}>{title}</Text>
            <Text style={[styles.message, dynamicStyles.text]}>{message}</Text>
          </View>
          <View style={styles.padding}>
            <CustomButton
              action={toggleOpen}
              text="Continuar"
              backgroundColor={buttonBgColor}
              activeBackgroundColor={activeButtonBgColor}
              textColor={textColorButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0007',
    paddingHorizontal: 32,
  },
  modalContent: {
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
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
  closeButtonContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  closeButton: {
    padding: 4,
    borderRadius: 3,
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: 'UbuntuSans-SemiBold',
    textAlign: 'center',
    color: '#333',
  },
  message: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'UbuntuSans-Regular',
  },
  padding: {
    padding: 16,
  },
});
