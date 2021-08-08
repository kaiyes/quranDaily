import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

export default function Loader(spinnerSize = 'large') {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={spinnerSize} color="#0000ff" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
