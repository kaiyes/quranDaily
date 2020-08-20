import React, { useState } from 'react'
import {
	createStackNavigator,
	TransitionPresets
} from '@react-navigation/stack'
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
import DuaDetailsBookmarked from './screens/DuaDetailsBookmarked.screen'
import FavouriteScreen from './screens/Favourites.screen'
import DeedsHomeScreen from './screens/DeedsHome.screen'
import StatScreen from './screens/Stats.screen'
import QuranScreen from './screens/Quran.screen'
import MemorizeScreen from './screens/Memorize.screen'
import SuraScreen from './screens/Sura.screen'

import testScreen from './screens/Test.screen'

//components
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Splash() {
	return <SplashScreen />
}

function DeedStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				...TransitionPresets.SlideFromRightIOS
			}}>
			<Stack.Screen
				name="DeedsHome"
				component={DeedsHomeScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	)
}

function DuaStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				...TransitionPresets.SlideFromRightIOS
			}}>
			<Stack.Screen
				name="Dua Home"
				component={DuaScreen}
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

			<Stack.Screen
				name="Favourites"
				component={FavouriteScreen}
				options={({ route }) => ({
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
					headerTitleAlign: 'center',
					headerTintColor: 'black',
					headerStyle: {
						backgroundColor: '#80ca8e'
					}
				})}
			/>

			<Stack.Screen
				name="BookmarkedDua"
				component={DuaDetailsBookmarked}
				options={({ route }) => ({
					headerTitleAlign: 'center',
					headerTintColor: 'black',
					headerStyle: {
						backgroundColor: '#80ca8e'
					}
				})}
			/>
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

function QuranStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				...TransitionPresets.SlideFromRightIOS
			}}>
			<Stack.Screen
				name="Quran"
				component={QuranScreen}
				options={{
					headerShown: false,
					headerTitleAlign: 'center',
					headerTintColor: 'black',
					headerStyle: {
						backgroundColor: '#80ca8e'
					}
				}}
			/>
			<Stack.Screen
				name="Sura"
				component={SuraScreen}
				options={({ route }) => ({
					title: route.params.suraName,
					headerTitleAlign: 'center',
					headerTintColor: 'black',
					headerStyle: {
						backgroundColor: '#80ca8e'
					}
				})}
			/>
		</Stack.Navigator>
	)
}

function LoggedInStack() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size = 22 }) => {
					switch (route.name) {
						case 'Deeds':
							return (
								<Icon name={'list'} type={'entypo'} size={22} color={color} />
							)
							break
						case 'Dua':
							return <FontAwesome5 name={'pray'} size={18} color={color} />

							break
						case 'Stats':
							return (
								<Icon
									name={'bar-chart'}
									type={'feather'}
									size={22}
									color={color}
								/>
							)
							break
						case 'Quran':
							return (
								<Icon name={'book'} type={'entypo'} size={22} color={color} />
							)
							break
						case 'Memorize':
							return (
								<Icon name={'save'} type={'entypo'} size={22} color={color} />
							)
							break
						default:
					}
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
			<Tab.Screen name="Quran" component={QuranStack} />
			<Tab.Screen name="Dua" component={DuaStack} />
			<Tab.Screen name="Memorize" component={MemorizeScreen} />
			<Tab.Screen name="Stats" component={StatScreen} />
			<Tab.Screen name="Test" component={testScreen} />
		</Tab.Navigator>
	)
}

export default function Navigator({ navigation }) {
	const [isLoading, setIsLoading] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(true)

	return isLoading ? Splash() : LoggedInStack()
}
