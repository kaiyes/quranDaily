import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
//screens
import HomeScreen from './screens/Home'
import DuaScreen from './screens/Duas'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Dua: {
    screen: DuaScreen
  }
})

export default createAppContainer(AppNavigator)
