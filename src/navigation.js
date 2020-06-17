import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

//Screens
import DuaDetailScreen from './screens/DuaDetails.screen'
import SplashScreen from './screens/Splash.screen'
import DuaScreen from './screens/DuaHome.screen'
import AllDuaScreen from './screens/AllDua.screen'
import DuaCategoriesdScreen from './screens/DuaCategoriesd.screen'
import FavouriteScreen from './screens/Favourites.screen'
import DeedsHomeScreen from './screens/DeedsHome.screen'
import StatScreen from './screens/Stats.screen'
import QuranScreen from './screens/Quran.screen'
import MemorizeScreen from './screens/Memorize.screen'

//components
import IconWithBadge from './components/ChatIcon'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Splash() {
  return <SplashScreen />
}

function DeedStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="DeedsHome" component={DeedsHomeScreen} />
    </Stack.Navigator>
  )
}

function DuaStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Dua Home" component={DuaScreen} />
      <Stack.Screen name="AllDuas" component={AllDuaScreen} />
      <Stack.Screen name="Categories" component={DuaCategoriesdScreen} />
      <Stack.Screen name="Favourites" component={FavouriteScreen} />
      <Stack.Screen name="DuaDetail" component={DuaDetailScreen} />
    </Stack.Navigator>
  )
}

function SignUpStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
    </Stack.Navigator>
  )
}

function LoggedInStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size = 22 }) => {
          let iconName

          switch (route.name) {
            case 'Deeds':
              iconName = 'list'
              break
            case 'Dua':
              iconName = 'book'
              break
            case 'Stats':
              iconName = 'bar-graph'
              break
            case 'Quran':
              iconName = 'book'
              break
            case 'Memorize':
              iconName = 'save'
              break
            default:
          }

          // You can return any component that you like here!
          return (
            <IconWithBadge
              name={iconName}
              type={'entypo'}
              size={22}
              color={color}
              badgeCount={0}
            />
          )
        }
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'darkseagreen',
        style: {
          backgroundColor: 'seagreen'
        },
        labelStyle: {
          fontWeight: '400',
          fontFamily: 'Menlo',
          fontSize: 14
        }
      }}>
      <Tab.Screen name="Deeds" component={DeedStack} />
      <Tab.Screen name="Quran" component={QuranScreen} />
      <Tab.Screen name="Dua" component={DuaStack} />
      <Tab.Screen name="Memorize" component={MemorizeScreen} />
      <Tab.Screen name="Stats" component={StatScreen} />
    </Tab.Navigator>
  )
}

export default function Navigator({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return isLoading ? Splash() : LoggedInStack()
}
