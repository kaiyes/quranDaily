import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import SegmentedControlTab from 'react-native-segmented-control-tab'

export default function Stats() {
	const [selectedIndex, setIndex] = useState(0)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<SegmentedControlTab
					values={['Week', 'Month', 'Year']}
					selectedIndex={selectedIndex}
					onTabPress={item => setIndex(item)}
				/>

				{selectedIndex === 2 ? (
					<Text style={styles.text}>2</Text>
				) : selectedIndex ? (
					<Text style={styles.text}> 1</Text>
				) : (
					<Text style={styles.text}>0</Text>
				)}
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: wp('5%'),
		paddingTop: hp('1%')
	}
})
