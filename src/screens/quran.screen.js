import React from 'react'
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View
} from 'react-native'

export default function QuranHome() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={styles.container}>
				<Text style={styles.highlight}>Quran Home</Text>
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
