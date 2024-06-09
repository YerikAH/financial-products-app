import {Image, StyleSheet, Text, View} from 'react-native';
import {useThemedStyles} from '../../../../hooks';
import {Product} from '../../../../models/data';

export const ProductDetailContainer = ({
  date_release,
  date_revision,
  description,
  id,
  logo,
  name,
}: Product) => {
  const {dynamicStyles} = useThemedStyles();
  return (
    <View style={styles.containerDetail}>
      <View style={styles.headerDetail}>
        <Text style={[styles.title, dynamicStyles.color]}>ID: {id}</Text>
        <Text style={[styles.label, dynamicStyles.color]}>
          Información extra
        </Text>
      </View>

      <View>
        <View style={styles.container}>
          <Text style={[styles.label, dynamicStyles.color]}>Nombre</Text>
          <Text style={[styles.text, dynamicStyles.text]}>{name}</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.label, dynamicStyles.color]}>Descripción</Text>
          <Text
            style={[styles.text, dynamicStyles.text]}
            lineBreakMode="tail"
            numberOfLines={2}>
            {description}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.label, dynamicStyles.color]}>
            Fecha liberación
          </Text>
          <Text style={[styles.text, dynamicStyles.text]}>{date_release}</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.label, dynamicStyles.color]}>
            Fecha revisión
          </Text>
          <Text style={[styles.text, dynamicStyles.text]}>{date_revision}</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.label, dynamicStyles.color]}>Logo</Text>
          <Image
            style={styles.image}
            source={{
              uri: logo,
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
    textAlign: 'right',
    width: '100%',
    maxWidth: 200,
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
