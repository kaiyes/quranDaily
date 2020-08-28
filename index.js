import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { NavigationNativeContainer } from '@react-navigation/native'
import { NotifierWrapper } from 'react-native-notifier'
import SplashScreen from 'react-native-splash-screen'

import Navigator from './src/navigation'

export default function App() {
	useEffect(() => SplashScreen.hide(), [])

	return (
		<NavigationNativeContainer>
			<NotifierWrapper>
				<Navigator />
			</NotifierWrapper>
		</NavigationNativeContainer>
	)
}

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App)
