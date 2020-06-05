import React from "react"
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from "react-native"

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions
} from "react-native/Libraries/NewAppScreen"

export default function Stats() {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}> Stats </Text>
				</View>
			</SafeAreaView>
		</>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter
	}
})
