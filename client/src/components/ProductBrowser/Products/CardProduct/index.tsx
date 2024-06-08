import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
import {useTheme} from '../../../../context/ThemeContext';
import {charade, getDynamicStyles, woodsmoke} from '../../../../colors';

export const CardProduct = () => {
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';
  const dynamicStyles = getDynamicStyles(isDarkMode);
  const handleProduct = () => console.log('Hola mundo');

  return (
    <TouchableHighlight
      style={[styles.card, dynamicStyles.card]}
      underlayColor={isDarkMode ? woodsmoke[900] : charade[100]}
      onPress={handleProduct}>
      <React.Fragment>
        <View>
          <Text style={[styles.title, dynamicStyles.color]}>
            Esto es el nombre del producto
          </Text>
          <Text style={[styles.text, dynamicStyles.text]}>ID: 1234</Text>
        </View>
        <ChevronRightIcon
          style={[dynamicStyles.icon]}
          strokeWidth={3}
          size={14}
        />
      </React.Fragment>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: 'UbuntuSans-SemiBold',
    fontSize: 14,
  },
  text: {
    marginTop: 4,
    fontFamily: 'UbuntuSans-Regular',
    fontSize: 14,
  },
});
