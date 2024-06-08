import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {getDynamicStyles} from '../../colors';
import {useTheme} from '../../context/ThemeContext';
import {CustomStatusBar} from './CustomStatusBar';

interface HeaderProps {
  logoLigth: ImageSourcePropType;
  logoDark?: ImageSourcePropType;
}

export const Header = ({logoLigth, logoDark}: HeaderProps) => {
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';
  const dynamicStyles = getDynamicStyles(isDarkMode);

  const logo = isDarkMode ? logoDark ?? logoLigth : logoLigth;
  return (
    <React.Fragment>
      <CustomStatusBar />
      <View style={[styles.header, dynamicStyles.colorHigh as ViewStyle]}>
        <Image style={styles.logo} source={logo} />
      </View>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
  },
  logo: {
    width: 100,
    objectFit: 'contain',
  },
});
