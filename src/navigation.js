import React, { useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"
//Screens
import DeedScreen from "./screens/Deeds.screen"
import DetailScreen from "./screens/Details.screen"
import SplashScreen from "./screens/Splash.screen"
import DuaScreen from "./screens/Dua.screen"
import JanazaScreen from "./screens/Janaza.screen"

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
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  )
}

function DuaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Deeds" component={DuaScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
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
              iconName = "home"
              break
            case "Dua":
              iconName = "chat"
              break
            case "Janaza":
              iconName = "credit"
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
        activeTintColor: "slateblue",
        inactiveTintColor: "darkgrey"
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
