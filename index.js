import 'react-native-gesture-handler' //have to according to docs

import React from 'react'
import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NotifierWrapper } from 'react-native-notifier'

import Navigator from './src/navigation.js'
import { name as appName } from './app.json'

function App() {
	return (
		<NavigationContainer>
			<NotifierWrapper>
				<Navigator />
			</NotifierWrapper>
		</NavigationContainer>
	)
}

AppRegistry.registerComponent(appName, () => App)
