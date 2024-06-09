import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {CreateProduct, Home, ProductDetail, UpdateProduct} from '../screens';
import {RootStackParamList, Routes} from './routes';

const Stack = createNativeStackNavigator<RootStackParamList>();
const screenOptions = {
  headerShown: false,
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={Routes.Home}>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.CreateProduct} component={CreateProduct} />
        <Stack.Screen name={Routes.UpdateProduct} component={UpdateProduct} />
        <Stack.Screen name={Routes.ProductDetail} component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
