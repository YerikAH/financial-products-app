import {Image, StyleSheet, Text, View} from 'react-native';
import {useThemedStyles} from '../../../hooks';

export const ProductDetailInfo = () => {
  const {dynamicStyles} = useThemedStyles();
  return (
    <View style={styles.containerDetail}>
      <View style={styles.headerDetail}>
        <Text style={[styles.title, dynamicStyles.color]}>ID: 12345</Text>
        <Text style={[styles.label, dynamicStyles.color]}>
          Información extra
        </Text>
      </View>

      <View>
        <View style={styles.container}>
          <Text style={[styles.label, dynamicStyles.color]}>Nombre</Text>
          <Text style={[styles.text, dynamicStyles.text]}>
            Nombre registrado
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.label, dynamicStyles.color]}>Descripción</Text>
          <Text style={[styles.text, dynamicStyles.text]}>
            Esto es una pequeño descripción
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.label, dynamicStyles.color]}>
            Fecha liberación
          </Text>
          <Text style={[styles.text, dynamicStyles.text]}>22/03/2024</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.label, dynamicStyles.color]}>
            Fecha revisión
          </Text>
          <Text style={[styles.text, dynamicStyles.text]}>22/03/2024</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.label, dynamicStyles.color]}>Logo</Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.pexels.com/photos/25489348/pexels-photo-25489348.jpeg',
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDetail: {
    paddingBottom: 200,
  },
  headerDetail: {
    marginBottom: 36,
  },
  title: {
    fontSize: 24,
    fontFamily: 'ChivoMono-SemiBold',
  },
  text: {
    fontSize: 14,
    fontFamily: 'UbuntuSans-SemiBold',
  },
  label: {
    fontSize: 14,
    fontFamily: 'UbuntuSans-Regular',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  image: {
    width: 150,
    height: 150,
    objectFit: 'cover',
    borderRadius: 8,
  },
});
