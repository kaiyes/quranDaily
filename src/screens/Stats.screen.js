import React, { useState } from 'react'
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	TouchableOpacity
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { Icon } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Week from '../components/Week'
import Month from '../components/Month'
import Year from '../components/Year'

export default function Stats() {
	const [selectedIndex, setIndex] = useState(0)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<SegmentedControlTab
					values={['Week', 'Month', 'Year']}
					tabTextStyle={styles.tabText}
					activeTabStyle={styles.activeTab}
					tabStyle={styles.tabStyle}
					selectedIndex={selectedIndex}
					onTabPress={item => setIndex(item)}
				/>

				{selectedIndex === 2 ? Year() : selectedIndex ? Month() : Week()}
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
	},
	tabText: {
		fontFamily: 'Menlo',
		color: 'black'
	},
	activeTab: {
		backgroundColor: 'forestgreen'
	},
	tabStyle: {
		borderColor: 'forestgreen'
	},
	icon: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.37,
		shadowRadius: 2,
		elevation: 5
	},
	iconRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: hp('1%')
	},
	specialIcon: {
		width: wp('8%'),
		height: wp('8%'),
		borderRadius: wp('4%'),
		justifyContent: 'center',
		marginHorizontal: wp('1.5%'),
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.37,
		shadowRadius: 2,
		elevation: 4
	}
})
