import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {CreateProduct, Home} from '../screens';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="CreateProduct">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateProduct" component={CreateProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
