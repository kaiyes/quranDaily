import React from 'react'
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View
} from 'react-native'

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={styles.container}>
				<Text style={styles.highlight}>App.js</Text>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	highlight: {
		fontWeight: '700'
	}
})
