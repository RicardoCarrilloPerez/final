import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DataInputScreen from './Lista de deseos/screens/DataInputScreen';
import BudgetScreen from './src/screens/BudgetScreen';
import { View } from 'react-native';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={DataInputScreen} />
        <Stack.Screen name="Screen2" component={BudgetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}