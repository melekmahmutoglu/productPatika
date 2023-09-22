import { StyleSheet, SafeAreaView, } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Products from './pages/Products';
import Details from './pages/Details';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name='Products' component={Products} options={
          {
            title: "Ürünler",
            headerStyle: {
              backgroundColor: '#4d4dff'
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
            }
          }
        } />
        <Stack.Screen name='Details' component={Details}
          options={
            {
              title: "Detay",
              headerStyle: {
                backgroundColor: '#4d4dff'
              },
              headerTitleStyle: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              },
              headerTintColor: 'white',
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
