import React, { useState, useMemo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

//dua screens
import DuaHome from './screens/duaHome.screen'
import AllDuaScreen from './screens/allDua.screen'
import DuaDetailScreen from './screens/duaDetails.screen'
import DuaCategoriesdScreen from './screens/duaCategoriesd.screen'

//Quran screens
import QuranHome from './screens/quran.screen'
import SuraScreen from './screens/sura.screen'

import LanguageContext from './utility/context'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function DuaStack() {
	const [language, setLanguage] = useState('bn')

	const value = useMemo(
		() => ({ language, setLanguage }),
		[language, setLanguage]
	)

	return (
		<LanguageContext.Provider value={value}>
			<Stack.Navigator>
				<Stack.Screen
					name="DuaHome"
					component={DuaHome}
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name="AllDuas"
					component={AllDuaScreen}
					options={({ route }) => ({
						title: 'all duas',
						headerBackTitle: null,
						headerTitleAlign: 'center',
						headerTintColor: 'black',
						headerStyle: {
							backgroundColor: '#80ca8e'
						}
					})}
				/>
				<Stack.Screen
					name="DuaDetail"
					component={DuaDetailScreen}
					options={({ route }) => ({
						headerTitle: null,
						headerTintColor: 'black',
						headerStyle: {
							backgroundColor: '#80ca8e'
						}
					})}
				/>
				<Stack.Screen
					name="Categories"
					component={DuaCategoriesdScreen}
					options={({ route }) => ({
						title: route.params.pageTitle,
						headerBackTitle: null,
						headerTitleAlign: 'center',
						headerTintColor: 'black',
						headerStyle: {
							backgroundColor: '#80ca8e'
						}
					})}
				/>
			</Stack.Navigator>
		</LanguageContext.Provider>
	)
}

function QuranStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="QuranHome"
				component={QuranHome}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen
				name="Sura"
				component={SuraScreen}
				options={({ route }) => ({
					headerBackTitleVisible: false,
					headerTransparent: true,
					headerTintColor: 'black',
					headerTitle: false
				})}
			/>
		</Stack.Navigator>
	)
}

function AppStack() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor:
					route.name === 'Quran'
						? 'darkseagreen'
						: 'lightsteelblue',
				tabBarStyle: {
					backgroundColor:
						route.name === 'Quran'
							? 'royalblue'
							: 'seagreen'
				},
				tabBarLabelStyle: {
					fontWeight: '400',
					fontFamily: 'Menlo',
					fontSize: 14
				},
				tabBarIcon: ({ focused, color, size = 22 }) => {
					switch (route.name) {
						case 'Dua':
							return (
								<Icon
									name={'air'}
									type={'entypo'}
									size={18}
									color={color}
								/>
							)
							break
						case 'Quran':
							return (
								<Icon
									name={'book'}
									type={'entypo'}
									size={22}
									color={color}
								/>
							)
							break
						default:
					}
				}
			})}>
			<Tab.Screen name="Dua" component={DuaStack} />
			<Tab.Screen name="Quran" component={QuranStack} />
		</Tab.Navigator>
	)
}

export default function Navigator({ navigation }) {
	return AppStack()
}
