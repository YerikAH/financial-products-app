import React from 'react';
import {SafeAreaView} from 'react-native';
import ThemeProvider from './src/providers/ThemeProvider';
import AppNavigator from './src/navigation/AppNavigator';

//Hola mundo

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaView
        style={{
          height: '100%',
        }}>
        <AppNavigator />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
