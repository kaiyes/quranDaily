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
	const [dataArray, setDataArray] = useState([])

	const data = {
		Quran: QuranData,
		'Fard Salah': FardSalahData,
		'Sunna Salah': SunnaSalahData,
		Tahajjud: TahajjudData,
		Sadakah: SadakahData,
		'Dua Morning': FardSalahData,
		'Dua Evening': SadakahData
	}

	function switchCircle(status) {
		if (status <= 30) {
			return styles.smallCircle
		} else if (status >= 70) {
			return styles.bigCircle
		} else {
			return styles.mediumCircle
		}
	}

	function Card(item) {
		return (
			<>
				<Text style={styles.habitName}>{item}</Text>
				<View style={styles.boxHolder}>
					{data[item].map(day => (
						<View style={styles.box} key={day._id}>
							<View
								style={[
									switchCircle(day.status),
									{ backgroundColor: day.color }
								]}
							/>
						</View>
					))}
				</View>
			</>
		)
	}

	useEffect(() => setDataArray(Object.keys(data)), [])

	return (
		<FlatList
			keyExtractor={item => item}
			data={dataArray}
			contentContainerStyle={styles.scrollView}
			renderItem={({ item }) => Card(item)}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	scrollView: {
		paddingTop: hp('2%'),
		paddingHorizontal: wp('1%')
	},
	boxHolder: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: wp('85%'),
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
		width: wp('3.6%'),
		height: wp('3.6%'),
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
