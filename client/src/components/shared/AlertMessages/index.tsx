import {StyleSheet, Text, View} from 'react-native';
import {useThemedStyles} from '../../../hooks';
import React from 'react';

interface Props {
  icon: React.ElementType;
  title: string;
  text: string;
}
export const AlertMessages = ({icon: Icon, title, text}: Props) => {
  const {dynamicStyles} = useThemedStyles();
  return (
    <View style={[styles.container, dynamicStyles.card]}>
      <Icon size={54} style={dynamicStyles.icon} />
      <Text style={[styles.title, dynamicStyles.color]}>{title}</Text>
      <Text style={[styles.text, dynamicStyles.text]}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 120,
    paddingHorizontal: 32,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    fontFamily: 'UbuntuSans-SemiBold',
    textAlign: 'center',
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'UbuntuSans-Regular',
    textAlign: 'center',
  },
});
