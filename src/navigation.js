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
import FavouriteScreen from './screens/Favourites.screen'
import DeedsHomeScreen from './screens/DeedsHome.screen'
import StatScreen from './screens/Stats.screen'
import QuranScreen from './screens/Quran.screen'
import MemorizeScreen from './screens/Memorize.screen'
import SuraScreen from './screens/Sura.screen'

//components
import IconWithBadge from './components/ChatIcon'

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
					title: route.params.category,
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
			<Tab.Screen name="Quran" component={QuranStack} />
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
