import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//screens
import HomeScreen from './screens/Home'
import DetailScreen from './screens/Details'
import DuaScreen from './screens/Duas'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dua" component={DuaScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  )
}
