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
import { getWeek } from 'date-fns'

import { DataStore, Predicates } from '@aws-amplify/datastore'
import { Fard, Quran, Sunna, Tahajjud, Sadaqa, Morn } from '../models'

import Loader from '../components/loader'

export default function Week() {
	const [loading, setLoading] = useState(false)
	const [quranData, setQuranData] = useState([])
	const [fardData, setFardData] = useState([])
	const [sunnaData, setSunnaData] = useState([])
	const [tajData, setTajData] = useState([])
	const [morn, setMornData] = useState([])
	const [sadaqa, setSadaqaData] = useState([])

	const topics = [
		{
			habitName: 'Quran',
			data: quranData,
			// color: hsl(147, 60, 47)
			color: 'mediumseagreen'
		},
		{
			habitName: 'Fard Salah',
			data: fardData,
			//color: hsl(219, 60, 66)
			color: 'steelblue'
		},
		{
			habitName: 'Sunna Salah',
			data: sunnaData,
			// color: hsl(51, 60, 50)
			color: 'gold'
		},
		{
			habitName: 'Tahajjud',
			data: tajData,
			// color: hsl(340, 60, 65)
			color: 'palevioletred'
		},
		{
			habitName: 'Sadakah',
			data: sadaqa,
			// color: hsl(207, 60, 49)
			color: 'slateblue'
		},
		{
			habitName: 'Dua Morning',
			data: morn,
			// color: hsl(289, 60, 63)
			color: 'lightsalmon'
		}
	]

	function switchCircle(status) {
		switch (status) {
			case 0:
				return styles.zeroCircle
				break
			case 1:
				return styles.oneCircle
				break
			case 2:
				return styles.twoCircle
				break
			case 3:
				return styles.threeCircle
				break
			case 4:
				return styles.fourCircle
				break
			case 5:
				return styles.fifthCircle
				break
			default:
				return styles.zeroCircle
		}
	}

	useEffect(() => {
		;(async function fetchData() {
			setLoading(true)
			const date = new Date()
			const week = `${getWeek(new Date())}`

			const FardData = await DataStore.query(Fard, c => c.week('eq', week))
			const QuranData = await DataStore.query(Quran, c => c.week('eq', week))
			const SunnaData = await DataStore.query(Sunna, c => c.week('eq', week))
			const TajData = await DataStore.query(Tahajjud, c => c.week('eq', week))
			const MornData = await DataStore.query(Morn, c => c.week('eq', week))
			const SadaqaData = await DataStore.query(Sadaqa, c => c.week('eq', week))

			const FardCleaned = await FardData.map(item => item.status).reverse()
			const QuranCleaned = await QuranData.map(item => item.status).reverse()
			const SunnaCleaned = await SunnaData.map(item => item.status).reverse()
			const TajCleaned = await TajData.map(item => item.status).reverse()
			const MornCleaned = await MornData.map(item => item.status).reverse()
			const SadaqaCleaned = await SadaqaData.map(item => item.status).reverse()

			setFardData(FardCleaned)
			setQuranData(QuranCleaned)
			setSunnaData(SunnaCleaned)
			setTajData(TajCleaned)
			setMornData(MornCleaned)
			setSadaqaData(SadaqaCleaned)

			setLoading(false)
		})()
	}, [])

	if (loading) Loader()

	return (
		<View style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}>
				{topics.map(item => (
					<View style={styles.boxHolder} key={Math.random()}>
						<Text style={styles.habitName}>{item.habitName}</Text>

						<View style={styles.boxes}>
							{item.data.map(stat => (
								<View style={styles.box} key={Math.random().toString()}>
									<View
										style={[
											switchCircle(stat),
											{
												backgroundColor: stat === 0 ? 'crimson' : item.color
											}
										]}
									/>
								</View>
							))}

							{new Array(7 - item.data.length).fill(0).map(stat => (
								<View style={styles.box} key={Math.random().toString()}>
									<View
										style={[styles.futureCircle, { backgroundColor: 'silver' }]}
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
		width: wp('77%'),
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
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: wp('80%'),
		paddingLeft: wp('1.5%')
	},
	habitName: {
		fontSize: 18,
		fontWeight: 'bold',
		fontFamily: 'Menlo',
		padding: hp('.5%')
	},

	minus: {
		fontSize: 14,
		fontWeight: 'bold',
		color: 'crimson'
	},
	zeroCircle: {
		width: wp('6%'),
		height: wp('6%'),
		borderRadius: wp('3%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	oneCircle: {
		width: wp('2%'),
		height: wp('2%'),
		borderRadius: wp('1%')
	},
	twoCircle: {
		width: wp('3%'),
		height: wp('3%'),
		borderRadius: wp('1.5%')
	},
	threeCircle: {
		width: wp('4%'),
		height: wp('4%'),
		borderRadius: wp('2%')
	},
	fourCircle: {
		width: wp('5%'),
		height: wp('5%'),
		borderRadius: wp('2.5%')
	},
	fifthCircle: {
		width: wp('6%'),
		height: wp('6%'),
		borderRadius: wp('3%')
	},
	futureCircle: {
		width: wp('6%'),
		height: wp('6%'),
		borderRadius: wp('3%')
	}
})
