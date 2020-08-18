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
import { FardSalah } from '../models'

export default function Deeds({ navigation }) {
	const [loading, setLoading] = useState(false)
	const [today, setToday] = useState('')
	const [fardPrayer, setFardPrayer] = useState({})

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
			name: '5_ayah',
			icon: require('../assets/icons/5_ayah.png')
		},
		{
			name: '1_page',
			icon: require('../assets/icons/1_page.png')
		},
		{
			name: '100',
			icon: require('../assets/icons/100.png')
		},
		{
			name: '1_juz',
			icon: require('../assets/icons/1_juz.png')
		},
		{
			name: '1_monjil',
			icon: require('../assets/icons/1_monjil.png')
		}
	]

	//insert prayer
	async function insertSalah(prayer) {
		const doesExist = await DataStore.query(FardSalah, c => c.date('eq', today))
		const original = await DataStore.query(FardSalah, doesExist[0].id)
		await DataStore.save(
			FardSalah.copyOf(original, updated => {
				switch (prayer) {
					case 'fajr':
						updated.fajr = true
						break
					case 'dhuhr':
						updated.dhuhr = true
						break
					case 'asr':
						updated.asr = true
						break
					case 'magrib':
						updated.magrib = true
						break
					case 'isha':
						updated.isha = true
						break
					default:
						updated
				}
			})
		)
		console.log(await DataStore.query(FardSalah, c => c.date('eq', today)))
	}

	async function checkIfSalahDone(salah) {
		const doesExist = await DataStore.query(FardSalah, c => c.date('eq', today))
		const original = doesExist[0]

		switch (salah) {
			case 'fajr':
				return original.fajr == true ? true : false
				break
			case 'dhuhr':
				return original.dhuhr == true ? true : false
				break
			case 'asr':
				return original.asr == true ? true : false
				break
			case 'magrib':
				return original.magrib == true ? true : false
				break
			case 'isha':
				return original.isha == true ? true : false
				break
			default:
				return true
		}
	}

	async function insertTodaySalah(day) {
		const doesFSexist = await DataStore.query(FardSalah, c => c.date('eq', day))
		if (doesFSexist.length === 0) {
			let data = {
				date: day,
				fajr: false,
				dhuhr: false,
				asr: false,
				magrib: false,
				isha: false,
				status: 0
			}
			await setFardPrayer(data)
			await DataStore.save(new FardSalah(data))
		}
		//stuff
	}

	async function insertTodayQuran(day) {
		const doesExist = await DataStore.query(Quran, c => c.date('eq', day))
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
			await setFardPrayer(data)
			await DataStore.save(new FardSalah(data))
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
											blurRadius={checkIfSalahDone(item) ? 6 : 0}
											borderColor={checkIfSalahDone(item) ? 'black' : null}
											borderWidth={checkIfSalahDone(item) ? 5 : 0}
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
									<TouchableOpacity onPress={() => insertSalah(item.name)}>
										<Image
											source={item.icon}
											style={styles.taskIcon}
											blurRadius={checkIfSalahDone(item) ? 6 : 0}
											borderColor={'green'}
											borderWidth={0}
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
