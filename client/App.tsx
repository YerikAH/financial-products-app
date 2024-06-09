import ThemeProvider from './src/providers/ThemeProvider';
import AppNavigator from './src/navigation/AppNavigator';
import {Providers} from './src/redux/providers';

function App(): React.JSX.Element {
  return (
    <Providers>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Providers>
  );
}

export default App;
