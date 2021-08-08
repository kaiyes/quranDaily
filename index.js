import React from 'react'
import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Navigator from './src/navigation.js'
import { name as appName } from './app.json'

function App() {
	return (
		<NavigationContainer>
			<Navigator />
		</NavigationContainer>
	)
}

AppRegistry.registerComponent(appName, () => App)
