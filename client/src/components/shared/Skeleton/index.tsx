import {LinearGradient} from 'react-native-linear-gradient';
import {Animated, StyleSheet, View} from 'react-native';
import {useEffect, useRef} from 'react';

interface Props {
  width: number;
  height: number;
  style: any;
}

export const Skeleton = ({width, height, style}: Props) => {
  const translateX = useRef(new Animated.Value(-width)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: 1000,
      }),
    ).start();
  }, [width]);
  return (
    <View
      style={StyleSheet.flatten([
        {width: width, height: height, backgroundColor: 'rgba(0,0,0,0.1)'},
        style,
      ])}>
      <Animated.View
        style={[
          styles.gradient,
          {
            transform: [{translateX: translateX}],
          },
        ]}>
        <LinearGradient
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['transparent', 'rgba(0,0,0,0.05)', 'transparent']}
        />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
  },
});
