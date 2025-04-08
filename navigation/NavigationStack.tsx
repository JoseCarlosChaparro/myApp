import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configuración' }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
          </Stack.Navigator>
      );
    
}