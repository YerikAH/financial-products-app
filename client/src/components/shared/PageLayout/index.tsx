import {ScrollView, StyleSheet} from 'react-native';
import {Header} from '../Header';
import {useThemedStyles} from '../../../hooks';
import {Routes} from '../../../navigation/routes';

interface Props {
  children: JSX.Element;
  routeBack?: Routes;
  routeParams?: any;
}
export const PageLayout = ({children, routeBack, routeParams}: Props) => {
  const {isDarkMode, dynamicStyles} = useThemedStyles();

  return (
    <>
      <Header
        logoLigth={require('../../../../assets/images/logo.png')}
        logoDark={require('../../../../assets/images/logo-dark.png')}
        isDarkMode={isDarkMode}
        routeBack={routeBack}
        routeParams={routeParams}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.main, dynamicStyles.colorLow]}>
        {children}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 32,
    paddingTop: 16,
  },
});
