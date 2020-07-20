import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { MenuProvider } from 'react-native-popup-menu'
import { NavigationNativeContainer } from '@react-navigation/native'

import Navigator from './src/navigation'

export default class App extends Component {
	render() {
		return (
			<NavigationNativeContainer>
				<MenuProvider>
					<Navigator />
				</MenuProvider>
			</NavigationNativeContainer>
		)
	}
}

AppRegistry.registerComponent(appName, () => App)
