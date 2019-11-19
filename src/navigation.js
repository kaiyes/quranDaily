import React from "react"
import { NavigationNativeContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
//screens
import HomeScreen from "./screens/Home"
import DuaScreen from "./screens/Duas"
import DeedScreen from "./screens/Deeds"
import QuranScreen from "./screens/Quran"
import MemorizeScreen from "./screens/Memorize"
import LiveQuizScreen from "./screens/LiveQuiz"
import LearnArabicScreen from "./screens/LearnArabic"
import QuranTeacherScreen from "./screens/Qtor"
import ZanajaScreen from "./screens/Janaza"
import DuaDetailScreen from "./screens/DuaDetail"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="dua" component={DuaScreen} />
        <Stack.Screen name="quran" component={QuranScreen} />
        <Stack.Screen name="deeds" component={DeedScreen} />
        <Stack.Screen name="memorize" component={MemorizeScreen} />
        <Stack.Screen name="learnArabic" component={LearnArabicScreen} />
        <Stack.Screen name="liveQuiz" component={LiveQuizScreen} />
        <Stack.Screen name="qTor" component={QuranTeacherScreen} />
        <Stack.Screen name="janaza" component={ZanajaScreen} />
        <Stack.Screen name="details" component={DuaDetailScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  )
}
