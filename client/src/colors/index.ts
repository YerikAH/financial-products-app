import {StyleSheet, TextStyle} from 'react-native';

export const charade = {
  '50': '#f6f7f9',
  '100': '#ecedf2',
  '200': '#d4d7e3',
  '400': '#838dad',
  '500': '#646f93',
  '600': '#4f587a',
  '700': '#414863',
  '800': '#383e54',
  '900': '#323648',
  '950': '#1f212c',
};
export const woodsmoke = {
  '50': '#f4f5f7',
  '100': '#e4e5e9',
  '200': '#cbcdd6',
  '300': '#a7aab9',
  '400': '#7b7f95',
  '500': '#60637a',
  '600': '#525468',
  '700': '#474957',
  '800': '#3f3f4b',
  '900': '#383941',
  '920': '#292A32',
  '950': '#09090b',
};
export const eastBay = {
  '50': '#f3f6fb',
  '100': '#e3ecf6',
  '200': '#cddef0',
  '300': '#abc8e5',
  '400': '#83add7',
  '500': '#6590cc',
  '600': '#5279be',
  '700': '#4766ae',
  '800': '#3f548e',
  '900': '#3a4d79',
  '950': '#252d46',
};
export const candlelight = {
  '50': '#feffe7',
  '100': '#fcffc1',
  '200': '#feff86',
  '300': '#fff941',
  '400': '#ffec0d',
  '500': '#ffdd00',
  '600': '#d1a300',
  '700': '#a67502',
  '800': '#895b0a',
  '900': '#744a0f',
  '950': '#442704',
};
export const red = {
  '500': '#ff2d2d',
  '600': '#f50d0d',
  '700': '#d50707',
};
export const green = {
  '500': '#16a34a',
  '600': '#22c55e',
};
export const white = '#fff';

export const getDynamicStyles = (isDarkMode: boolean) => {
  return StyleSheet.create({
    color: {
      color: isDarkMode ? charade[50] : charade[800],
    },
    text: {
      color: isDarkMode ? charade[200] : charade[400],
    },
    colorHigh: {
      backgroundColor: isDarkMode ? woodsmoke[920] : charade[100],
    },
    colorLow: {
      backgroundColor: isDarkMode ? woodsmoke[900] : woodsmoke[50],
    },
    card: {
      backgroundColor: isDarkMode ? woodsmoke[800] : charade[50],
      borderColor: isDarkMode ? woodsmoke[700] : charade[200],
    },
    icon: {
      color: isDarkMode ? charade[50] : charade[400],
    } as TextStyle,
  });
};
