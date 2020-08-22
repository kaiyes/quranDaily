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

import { DataStore, Predicates } from '@aws-amplify/datastore'
import { Fard, Quran, Sunna, Tahajjud, Sadaqa, Morn } from '../models'

import Loader from '../components/loader'

export default function Week() {
	const [dataArray, setDataArray] = useState([])

	const [loading, setLoading] = useState(false)
	const [quranData, setQuranData] = useState([])
	const [fardData, setFardData] = useState([])
	const [sunnaData, setSunnaData] = useState([])
	const [tajData, setTajData] = useState([])
	const [morn, setMornData] = useState([])
	const [sadaqa, setSadaqaData] = useState([])

	const data = {
		Quran: quranData,
		'Fard Salah': fardData,
		'Sunna Salah': sunnaData,
		Tahajjud: tajData,
		Sadakah: sadaqa,
		'Dua Morning': morn
	}

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

	function Card(item) {
		return (
			<>
				<Text style={styles.habitName}>{item}</Text>
				<View style={styles.boxHolder}>
					{data[item].map(i => (
						<View style={styles.box} key={Math.random().toString()}>
							<View
								style={[
									switchCircle(i),
									{
										backgroundColor: i === 0 ? 'crimson' : data[item].color
									}
								]}
							/>
						</View>
					))}
					{new Array(365 - item.length).fill(0).map(stat => (
						<View style={styles.box} key={Math.random().toString()}>
							<View
								style={[styles.futureCircle, { backgroundColor: 'silver' }]}
							/>
						</View>
					))}
				</View>
			</>
		)
	}

	useEffect(() => {
		;(async function fetchData() {
			setLoading(true)
			const date = new Date()
			const year = `${date.getFullYear()}`

			const FardData = await DataStore.query(Fard, c => c.year('eq', year))
			const QuranData = await DataStore.query(Quran, c => c.year('eq', year))
			const SunnaData = await DataStore.query(Sunna, c => c.year('eq', year))
			const TajData = await DataStore.query(Tahajjud, c => c.year('eq', year))
			const MornData = await DataStore.query(Morn, c => c.year('eq', year))
			const SadaqaData = await DataStore.query(Sadaqa, c => c.year('eq', year))

			const FardCleaned = await FardData.map(item => item.status)
			const QuranCleaned = await QuranData.map(item => item.status)
			const SunnaCleaned = await SunnaData.map(item => item.status)
			const TajCleaned = await TajData.map(item => item.status)
			const MornCleaned = await MornData.map(item => item.status)
			const SadaqaCleaned = await SadaqaData.map(item => item.status)

			FardCleaned.color = 'mediumseagreen'
			QuranData.color = 'steelblue'
			SunnaData.color = 'gold'
			TajData.color = 'palevioletred'
			SadaqaData.color = 'slateblue'
			MornData.color = 'lightsalmon'

			setFardData(FardCleaned)
			setQuranData(QuranCleaned)
			setSunnaData(SunnaCleaned)
			setTajData(TajCleaned)
			setMornData(MornCleaned)
			setSadaqaData(SadaqaCleaned)

			setDataArray(Object.keys(data))

			setLoading(false)
		})()
	}, [])

	return loading ? (
		Loader()
	) : (
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

	minus: {
		fontSize: 14,
		fontWeight: 'bold',
		color: 'crimson'
	},
	zeroCircle: {
		width: wp('3%'),
		height: wp('3%'),
		borderRadius: wp('1.5%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	oneCircle: {
		width: wp('1%'),
		height: wp('1%'),
		borderRadius: wp('.5%')
	},
	twoCircle: {
		width: wp('2%'),
		height: wp('2%'),
		borderRadius: wp('1%')
	},
	threeCircle: {
		width: wp('3%'),
		height: wp('3%'),
		borderRadius: wp('1.5%')
	},
	fourCircle: {
		width: wp('4%'),
		height: wp('4%'),
		borderRadius: wp('2%')
	},
	fifthCircle: {
		width: wp('5%'),
		height: wp('5%'),
		borderRadius: wp('2.5%')
	},
	futureCircle: {
		width: wp('2%'),
		height: wp('2%'),
		borderRadius: wp('1%')
	}
})
