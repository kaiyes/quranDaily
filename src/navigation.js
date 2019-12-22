import React, { useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

//Screens
import DeedScreen from "./screens/Deeds.screen"
import DuaDetailScreen from "./screens/DuaDetails.screen"
import SplashScreen from "./screens/Splash.screen"
import DuaScreen from "./screens/Dua.screen"
import JanazaScreen from "./screens/Janaza.screen"
import AllDuaScreen from "./screens/AllDua.screen"
import CategoryScreen from "./screens/Categorised.screen"
import FavouriteScreen from "./screens/Favourites.screen"

//components
import IconWithBadge from "./Components/ChatIcon"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Splash() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  )
}

function DeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Deeds" component={DeedScreen} />
    </Stack.Navigator>
  )
}

function DuaStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: "seagreen"
        },
        headerTintColor: "white",
        headerBackTitle: null,
        headerTitleStyle: {
          fontWeight: "500",
          fontFamily: "Menlo",
          fontSize: hp("2%")
        }
      })}
    >
      <Stack.Screen name="Dua Home" component={DuaScreen} />
      <Stack.Screen name="AllDuas" component={AllDuaScreen} />
      <Stack.Screen
        name="Categories"
        component={CategoryScreen}
        options={({ route }) => ({
          title:
            route.params.pageTitle != null
              ? route.params.pageTitle.length > 10
                ? `${route.params.pageTitle.slice(0, 12)}...`
                : route.params.pageTitle
              : ""
        })}
      />
      <Stack.Screen name="Favourites" component={FavouriteScreen} />
      <Stack.Screen
        name="DuaDetail"
        component={DuaDetailScreen}
        options={({ route }) => ({
          title:
            route.params.pageTitle != null
              ? route.params.pageTitle.length > 10
                ? `${route.params.pageTitle.slice(0, 12)}...`
                : route.params.pageTitle
              : ""
        })}
      />
    </Stack.Navigator>
  )
}

function SignUpStack() {
  return (
    <Stack.Navigator headerMode="none">
      <>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
      </>
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
            case "Deeds":
              iconName = "list"
              break
            case "Dua":
              iconName = "book"
              break
            case "Janaza":
              iconName = "map"
              break
            default:
          }

          // You can return any component that you like here!
          return (
            <IconWithBadge
              name={iconName}
              type={"entypo"}
              size={22}
              color={color}
              badgeCount={0}
            />
          )
        }
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "darkseagreen",
        style: {
          backgroundColor: "seagreen"
        },
        labelStyle: {
          fontWeight: "bold",
          fontFamily: "Menlo",
          fontSize: hp("1.5%")
        }
      }}
    >
      <Tab.Screen name="Deeds" component={DeedStack} />
      <Tab.Screen name="Dua" component={DuaStack} />
      <Tab.Screen name="Janaza" component={JanazaScreen} />
    </Tab.Navigator>
  )
}

export default function Navigator({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return isLoading ? Splash() : LoggedInStack()
}
