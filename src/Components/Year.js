import React, { useState, useEffect } from 'react'
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	ScrollView,
	Image,
	FlatList
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
	const data = {
		Quran: QuranData,
		'Fard Salah': FardSalahData,
		'Sunna Salah': SunnaSalahData,
		Tahajjud: TahajjudData,
		Sadakah: SadakahData,
		'Dua Morning': FardSalahData,
		'Dua Morning': SadakahData
	}

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
				horizontal={true}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}>
				{data.map(day => (
					<View style={styles.boxHolder} key={Math.random().toString()}>
						<Text style={styles.habitName}>{day.habitName}</Text>

						<FlatList
							data={day.fakeData}
							numColumns={12}
							keyExtractor={item => item._id}
							scrollEnabled={false}
							renderItem={({ item }) => (
								<View style={styles.boxes}>
									<TouchableOpacity onPress={() => console.log(day)}>
										<View style={styles.box} key={item._id}>
											<View
												style={[
													swithcCircle(item.status),
													{ backgroundColor: item.color }
												]}
											/>
										</View>
									</TouchableOpacity>
								</View>
							)}
						/>
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
		paddingHorizontal: wp('5%'),
		paddingVertical: hp('1%')
	},
	boxHolder: {
		backgroundColor: 'white',
		paddingVertical: hp('2%'),
		paddingHorizontal: wp('3%'),
		marginBottom: hp('2%'),
		marginRight: wp('5%'),
		borderRadius: wp('1%'),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.37,
		shadowRadius: 3,
		elevation: 6
	},
	box: {
		width: wp('4%'),
		height: wp('4%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	boxes: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	habitName: {
		fontSize: 22,
		fontFamily: 'Menlo',
		padding: hp('.5%')
	},
	smallCircle: {
		width: wp('1%'),
		height: wp('1%'),
		borderRadius: wp('.5%')
	},
	mediumCircle: {
		width: wp('2%'),
		height: wp('2%'),
		borderRadius: wp('1%')
	},
	bigCircle: {
		width: wp('3%'),
		height: wp('3%'),
		borderRadius: wp('1.5%')
	}
})

// const data = {
// 	'Quran': QuranData,
// 	'Fard Salah': FardSalahData,
// 	'Sunna Salah': SunnaSalahData,
// 	'Tahajjud': TahajjudData,
// 	'Sadakah': SadakahData,
// 	'Dua Morning': FardSalahData,
// 	'Dua Morning': SadakahData
// }
