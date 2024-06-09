import {StatusBar} from 'react-native';

interface Props {
  isDarkMode: boolean;
  dynamicStyles: any;
}
export const CustomStatusBar = ({isDarkMode, dynamicStyles}: Props) => {
  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      {...dynamicStyles.colorHigh}
    />
  );
};
