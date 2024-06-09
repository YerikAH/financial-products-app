import {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import config from '../../../config';

interface Props {
  uri: string;
}
export const FallbackImage = ({uri}: Props) => {
  const [imageUri, setImageUri] = useState(uri);
  const handleError = () => {
    setImageUri(config.defaultImageUrl);
  };
  return (
    <Image
      style={styles.image}
      source={{uri: imageUri}}
      onError={handleError}
    />
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
