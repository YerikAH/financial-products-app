import {StyleSheet, View, Modal, Text, ActivityIndicator} from 'react-native';
import {useThemedStyles} from '../../../hooks';
import {charade, woodsmoke} from '../../../colors';

interface Props {
  open: boolean;
  title: string;
  message: string;
}

export const ModalLoader = ({open, title, message}: Props) => {
  const {dynamicStyles, isDarkMode} = useThemedStyles();
  return (
    <Modal
      visible={open}
      transparent={true}
      animationType="fade"
      statusBarTranslucent>
      <View style={styles.overlay}>
        <View style={[styles.content, dynamicStyles.card]}>
          <ActivityIndicator
            size="large"
            color={isDarkMode ? woodsmoke[600] : charade[400]}
          />
          <Text style={[styles.title, dynamicStyles.color]}>{title}</Text>
          <Text style={[styles.message, dynamicStyles.text]}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 50,
    backgroundColor: '#0007',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 32,
    paddingHorizontal: 64,
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    fontFamily: 'UbuntuSans-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
  message: {
    marginTop: 8,
    fontFamily: 'UbuntuSans-Regular',
    fontSize: 14,
    textAlign: 'center',
  },
});
