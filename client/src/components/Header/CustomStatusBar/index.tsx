import {StatusBar} from 'react-native';
import React from 'react';
import {useTheme} from '../../../context/ThemeContext';
import {getDynamicStyles} from '../../../colors';

export const CustomStatusBar = () => {
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';
  const dynamicStyles = getDynamicStyles(isDarkMode);
  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      {...dynamicStyles.colorHigh}
    />
  );
};
