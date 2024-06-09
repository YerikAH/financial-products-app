import {charade, getDynamicStyles, woodsmoke} from '../../../colors';
import {CustomStatusBar} from './CustomStatusBar';
import {Routes} from '../../../navigation/routes';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {useAppNavigation} from '../../../hooks';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

interface Props {
  logoLigth: ImageSourcePropType;
  logoDark?: ImageSourcePropType;
  isDarkMode: boolean;
  routeBack?: Routes;
}

export const Header = ({logoLigth, logoDark, isDarkMode, routeBack}: Props) => {
  const dynamicStyles = getDynamicStyles(isDarkMode);
  const logo = isDarkMode ? logoDark ?? logoLigth : logoLigth;
  const {navigateTo} = useAppNavigation();
  const routeBackTo = () => navigateTo(routeBack as Routes);
  return (
    <>
      <CustomStatusBar dynamicStyles={dynamicStyles} isDarkMode={isDarkMode} />
      <View
        style={[
          styles.header,
          routeBack && styles.headerWithButton,
          dynamicStyles.colorHigh,
        ]}>
        {routeBack && (
          <TouchableHighlight
            onPress={routeBackTo}
            style={styles.buttonIcon}
            underlayColor={isDarkMode ? woodsmoke[800] : charade[200]}>
            <ChevronLeftIcon
              size={24}
              strokeWidth={2}
              style={dynamicStyles.icon}
            />
          </TouchableHighlight>
        )}
        <Image style={styles.logo} source={logo} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
  },
  headerWithButton: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 65,
    paddingHorizontal: 32,
    columnGap: 16,
  },
  logo: {
    width: 100,
    objectFit: 'contain',
  },
  buttonIcon: {
    padding: 4,
    borderRadius: 3,
  },
});
