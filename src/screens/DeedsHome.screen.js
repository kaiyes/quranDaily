import React, { useState, useEffect } from 'react'
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'
import { Bar } from 'react-native-progress'

import { DataStore } from '@aws-amplify/datastore'
import { FardSalah, Quran } from '../models'

export default function Deeds({ navigation }) {
	const [loading, setLoading] = useState(false)
	const [today, setToday] = useState('')

	const prayers = [
		{
			name: 'fajr',
			icon: require('../assets/icons/fajr.png')
		},
		{
			name: 'dhuhr',
			icon: require('../assets/icons/dhuhr.png')
		},
		{
			name: 'asr',
			icon: require('../assets/icons/asr.png')
		},
		{
			name: 'magrib',
			icon: require('../assets/icons/magrib.png')
		},
		{
			name: 'isha',
			icon: require('../assets/icons/isha.png')
		}
	]

	const quran = [
		{
			name: 'hundred',
			icon: require('../assets/icons/5_ayah.png')
		},
		{
			name: 'mulk',
			icon: require('../assets/icons/1_page.png')
		},
		{
			name: 'juz',
			icon: require('../assets/icons/100.png')
		},
		{
			name: 'lastAyatsBaqara',
			icon: require('../assets/icons/1_juz.png')
		},
		{
			name: 'manzil',
			icon: require('../assets/icons/1_monjil.png')
		}
	]

	async function checkSalah(salah) {
		const doesExist = await DataStore.query(FardSalah, c => c.date('eq', today))
		const original = doesExist[0]
		switch (salah) {
			case 'fajr':
				return original.fajr ? true : false
				break
			case 'dhuhr':
				return original.dhuhr ? true : false
				break
			case 'asr':
				return original.asr ? true : false
				break
			case 'magrib':
				return original.magrib ? true : false
				break
			case 'isha':
				return original.isha ? true : false
				break
			default:
				return true
		}
	}

	async function checkQuran(part) {
		const doesExist = await DataStore.query(Quran, c => c.date('eq', today))
		const original = doesExist[0]
		switch (part) {
			case 'hundred':
				return original.hundred ? true : false
				break
			case 'juz':
				return original.juz ? true : false
				break
			case 'manzil':
				return original.manzil ? true : false
				break
			case 'mulk':
				return original.mulk ? true : false
				break
			case 'lastAyatsBaqara':
				return original.lastAyatsBaqara ? true : false
				break
			default:
				return true
		}
	}

	async function insertTodaySalah(day) {
		const doesExist = await DataStore.query(FardSalah, c => c.date('eq', day))
		if (doesExist.length === 0) {
			let data = {
				date: day,
				fajr: false,
				dhuhr: false,
				asr: false,
				magrib: false,
				isha: false,
				color: 'green',
				status: 0
			}
			await DataStore.save(new FardSalah(data))
		}
		//stuff
	}

	async function insertTodayQuran(day) {
		const doesExist = await DataStore.query(Quran, c => c.date('eq', day))
		if (doesExist.length === 0) {
			let data = {
				date: day,
				hundred: false,
				juz: false,
				manzil: false,
				mulk: false,
				lastAyatsBaqara: false,
				status: 0
			}
			await DataStore.save(new Quran(data))
		}
		//stuff
	}

	useEffect(() => {
		;(async function fetchData() {
			setLoading(true)
			const date = new Date()
			const day = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
			await setToday(day)
			await insertTodaySalah(day)
			await insertTodayQuran(day)
			//stuff
			setLoading(false)
		})()
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>WelCome, Kaiyes</Text>
			<Text style={styles.headerSubtitle}>Let's have a sunnah day</Text>

			<ScrollView contentContainerStyle={styles.scrollView}>
				<View style={styles.cardHolder}>
					{/* fard salah card */}
					{/* fard Salaha card */}

					<View style={styles.card}>
						<View style={styles.topRow}>
							<Image
								source={require('../assets/images/prayer.png')}
								style={styles.image}
							/>
						</View>
						<View style={styles.bottomRow}>
							<Text style={styles.cardHeader}>Fard Prayer</Text>
							<View style={styles.dotHolder}>
								{prayers.map(item => (
									<TouchableOpacity onPress={() => insertSalah(item.name)}>
										<Image
											source={item.icon}
											style={styles.taskIcon}
											blurRadius={checkSalah(item.name) === true ? 6 : 0}
											borderColor={
												checkSalah(item.name) === true ? 'black' : null
											}
											borderWidth={checkSalah(item.name) === true ? 5 : 0}
										/>
									</TouchableOpacity>
								))}
							</View>
						</View>
					</View>

					{/*  card */}
					{/*  card */}

					<View style={styles.card}>
						<View style={styles.topRow}>
							<Image
								source={require('../assets/images/quran.jpg')}
								style={styles.image}
							/>
						</View>
						<View style={styles.bottomRow}>
							<Text style={styles.cardHeader}>Quran</Text>
							<View style={styles.dotHolder}>
								{quran.map(item => (
									<TouchableOpacity
										onPress={async () => {
											console.log(await checkQuran(item.name))
										}}>
										<Image
											source={item.icon}
											style={styles.taskIcon}
											blurRadius={checkQuran(item.name) ? 6 : 0}
											borderColor={checkQuran(item.name) ? 'black' : null}
											borderWidth={checkQuran(item.name) ? 5 : 0}
										/>
									</TouchableOpacity>
								))}
							</View>
						</View>
					</View>

					{/* fard Salaha card */}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	header: {
		fontWeight: '400',
		color: 'black',
		fontFamily: 'Menlo',
		fontSize: 22,
		marginLeft: wp('5%'),
		marginTop: hp('1%')
	},
	headerSubtitle: {
		fontWeight: '400',
		color: 'gray',
		fontFamily: 'Menlo',
		fontSize: 17,
		marginLeft: wp('5%')
	},
	flatList: {
		width: wp('100%'),
		marginTop: hp('3%'),
		alignItems: 'center'
	},
	card: {
		backgroundColor: 'tomato',
		width: wp('42.5%'),
		borderRadius: wp('2%'),
		alignItems: 'center',
		marginBottom: hp('3%'),
		marginHorizontal: wp('2.5%'),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.37,
		shadowRadius: 4,
		elevation: 4
	},
	cardHeader: {
		fontFamily: 'Menlo',
		fontWeight: '500',
		color: 'white',
		fontSize: 17,
		marginVertical: hp('1.5%')
	},
	topRow: {
		height: hp('12%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	bottomRow: {
		flex: 1,
		width: wp('42.5%'),
		backgroundColor: '#343a40',
		alignItems: 'center',
		paddingHorizontal: wp('2%'),
		paddingBottom: hp('1.5%'),
		borderBottomLeftRadius: wp('2%'),
		borderBottomRightRadius: wp('2%')
	},
	dotHolder: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	plusIcon: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		position: 'absolute',
		bottom: 0,
		right: 0
	},
	icon: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 12
	},
	image: {
		flex: 1,
		width: wp('42.5%'),
		borderTopLeftRadius: wp('2%'),
		borderTopRightRadius: wp('2%')
	},
	taskIcon: {
		width: wp('10%'),
		height: wp('10%'),
		borderRadius: wp('5%'),
		marginRight: wp('2%')
	},
	footer: {
		height: wp('3%')
	},
	iconCheck: {
		position: 'absolute',
		top: 10,
		left: 10
	},
	scrollView: {
		marginTop: hp('2%'),
		marginLeft: wp('1%')
	},
	cardHolder: {
		flexDirection: 'row'
	}
})
