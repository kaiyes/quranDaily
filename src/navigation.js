import React, { useState, useMemo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//screens
import DuaHome from './screens/duaHome.screen'
import QuranHome from './screens/quran.screen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function DuaStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name="DuaHome" component={DuaHome} />
		</Stack.Navigator>
	)
}

function QuranStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name="QuranHome" component={QuranHome} />
		</Stack.Navigator>
	)
}

function AppStack() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Dua" component={DuaStack} />
			<Tab.Screen name="Quran" component={QuranStack} />
		</Tab.Navigator>
	)
}

export default function Navigator({ navigation }) {
	return AppStack()
}
