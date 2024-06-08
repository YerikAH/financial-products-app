import React, {useState, useMemo, ReactNode, useEffect} from 'react';
import ThemeContext from '../context/ThemeContext';
import {Theme} from '../types';
import {useColorScheme} from 'react-native';

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({children}: Props): React.JSX.Element => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(systemTheme || 'light');

  useEffect(() => {
    setTheme(systemTheme || 'light');
  }, [systemTheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({theme, toggleTheme}), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
