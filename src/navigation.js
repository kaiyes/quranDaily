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
import MentorScreen from "./screens/Mentors"
import KitabScreen from "./screens/Kitabs"
import DreamScreen from "./screens/Dreams"

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
        <Stack.Screen name="dreams" component={DreamScreen} />
        <Stack.Screen name="mentors" component={MentorScreen} />
        <Stack.Screen name="kitabs" component={KitabScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  )
}
