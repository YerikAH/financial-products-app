import {StyleSheet, View} from 'react-native';
import {Skeleton} from '../../../shared';

export const ProductDetailSekeleton = () => {
  return (
    <View style={styles.containerDetail}>
      <View style={styles.headerDetail}>
        <Skeleton width={150} height={40} style={styles.skeleton} />
        <Skeleton width={80} height={20} style={styles.skeleton} />
      </View>
      <View>
        <View style={styles.container}>
          <Skeleton width={100} height={20} style={styles.skeleton} />
          <Skeleton width={120} height={20} style={styles.skeleton} />
        </View>
        <View style={styles.container}>
          <Skeleton width={100} height={20} style={styles.skeleton} />
          <View>
            <Skeleton width={120} height={20} style={styles.skeleton} />
            <Skeleton width={120} height={20} style={styles.skeleton} />
          </View>
        </View>
        <View style={styles.container}>
          <Skeleton width={100} height={20} style={styles.skeleton} />
          <Skeleton width={120} height={20} style={styles.skeleton} />
        </View>
        <View style={styles.container}>
          <Skeleton width={100} height={20} style={styles.skeleton} />
          <Skeleton width={120} height={20} style={styles.skeleton} />
        </View>

        <View style={styles.container}>
          <Skeleton width={100} height={20} style={styles.skeleton} />
          <Skeleton width={120} height={120} style={styles.skeleton} />
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
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  skeleton: {
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 4,
  },
});
