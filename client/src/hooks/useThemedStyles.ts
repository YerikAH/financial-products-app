import {getDynamicStyles} from '../colors';
import {useTheme} from '../context/ThemeContext';

export const useThemedStyles = () => {
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';
  const dynamicStyles = getDynamicStyles(isDarkMode);

  return {isDarkMode, dynamicStyles};
};
