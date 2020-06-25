import React, { useState, useEffect } from 'react'
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	ScrollView,
	Image
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'

import QuranData from '../utility/fakeMonthViewQuran'
import FardSalahData from '../utility/fakeMonthViewFamily'
import SunnaSalahData from '../utility/fakeMonthViewEntertainment'
import TahajjudData from '../utility/fakeMonthViewWork'
import SadakahData from '../utility/fakeMonthViewSide'

export default function Week() {
	const data = [
		{
			habitName: 'Quran',
			fakeData: QuranData.slice(0, 30)
		},
		{
			habitName: 'Fard Salah',
			fakeData: FardSalahData.slice(0, 30)
		},
		{
			habitName: 'Sunna Salah',
			fakeData: SunnaSalahData.slice(0, 30)
		},
		{
			habitName: 'Tahajjud',
			fakeData: TahajjudData.slice(0, 30)
		},
		{
			habitName: 'Sadakah',
			fakeData: SadakahData.slice(0, 30)
		},
		{
			habitName: 'Dua Morning',
			fakeData: FardSalahData.slice(0, 30)
		},
		{
			habitName: 'Dua Evening',
			fakeData: SadakahData.slice(0, 30)
		}
	]

	function swithcCircle(status) {
		if (status <= 30) {
			return styles.smallCircle
		} else if (status >= 70) {
			return styles.bigCircle
		} else {
			return styles.mediumCircle
		}
	}

	return (
		<View style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}>
				{data.map(item => (
					<View style={styles.boxHolder} key={Math.random()}>
						<Text style={styles.habitName} onPress={() => console.log(item)}>
							{item.habitName}
						</Text>

						<View style={styles.boxes}>
							{item.fakeData.map(day => (
								<View style={styles.box} key={Math.random()}>
									<View
										style={[
											swithcCircle(day.status),
											{ backgroundColor: day.color }
										]}
									/>
								</View>
							))}
						</View>
					</View>
				))}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	scrollView: {
		paddingHorizontal: wp('2%'),
		paddingVertical: hp('1%')
	},
	boxHolder: {
		backgroundColor: 'white',
		paddingVertical: hp('2%'),
		paddingHorizontal: wp('2%'),
		marginBottom: hp('2%'),
		borderRadius: wp('1%'),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.37,
		shadowRadius: 3,
		elevation: 6
	},
	box: {
		width: wp('8%'),
		height: wp('8%'),
		marginRight: wp('2%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	boxes: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	habitName: {
		fontSize: 18,
		fontFamily: 'Menlo',
		fontWeight: 'bold',
		padding: hp('.5%')
	},
	smallCircle: {
		width: wp('2%'),
		height: wp('2%'),
		borderRadius: wp('1%')
	},
	mediumCircle: {
		width: wp('4%'),
		height: wp('4%'),
		borderRadius: wp('2%')
	},
	bigCircle: {
		width: wp('6%'),
		height: wp('6%'),
		borderRadius: wp('3%')
	}
})
