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
import {
	FardSalah,
	Quran,
	SunnaSalah,
	Tahajjud,
	Sadaqat,
	MorningDua
} from '../models'

export default function Deeds({ navigation }) {
	const [loading, setLoading] = useState(false)
	const [today, setToday] = useState('')
	const [prayerObj, setPrayers] = useState({})
	const [quran, setQuran] = useState({})
	const [sunnah, setSunnah] = useState({})
	const [tahajjud, setTahajjud] = useState({})
	const [sadaqa, setSadaqa] = useState({})
	const [morningDua, setMorningDua] = useState({})

	// first init salah
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
		const existsYet = await DataStore.query(FardSalah, c => c.date('eq', day))
		setPrayers(existsYet[0])
	}

	// daily salah
	async function insertSalah(prayer) {
		const doesExist = await DataStore.query(FardSalah, c => c.date('eq', today))
		const original = doesExist[0]
		await DataStore.save(
			FardSalah.copyOf(original, updated => {
				switch (prayer) {
					case 'fajr':
						updated.fajr = true
						updated.status += 1
						break
					case 'dhuhr':
						updated.dhuhr = true
						updated.status += 1
						break
					case 'asr':
						updated.asr = true
						updated.status += 1
						break
					case 'magrib':
						updated.magrib = true
						updated.status += 1
						break
					case 'isha':
						updated.isha = true
						updated.status += 1
						break
					default:
						original
				}
			})
		)
		const savedObj = await DataStore.query(FardSalah, c => c.date('eq', today))
		await setPrayers(savedObj[0])
	}

	// first init Quran
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
		const existsYet = await DataStore.query(Quran, c => c.date('eq', day))
		setQuran(existsYet[0])
	}

	// daily Quran
	async function insertQuran(part) {
		const doesExist = await DataStore.query(Quran, c => c.date('eq', today))
		const original = doesExist[0]
		await DataStore.save(
			Quran.copyOf(original, updated => {
				switch (part) {
					case 'hundred':
						updated.hundred = true
						updated.status += 1
						break
					case 'manzil':
						updated.manzil = true
						updated.status += 1
						break
					case 'juz':
						updated.juz = true
						updated.status += 1
						break
					case 'mulk':
						updated.mulk = true
						updated.status += 1
						break
					case 'lastAyatsBaqara':
						updated.lastAyatsBaqara = true
						updated.status += 1
						break
					default:
						original
				}
			})
		)
		const savedObj = await DataStore.query(Quran, c => c.date('eq', today))
		await setQuran(savedObj[0])
	}

	// first init Sunnah
	async function insertTodaySunnah(day) {
		const doesExist = await DataStore.query(SunnaSalah, c => c.date('eq', day))
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
			await DataStore.save(new SunnaSalah(data))
		}
		const existsYet = await DataStore.query(SunnaSalah, c => c.date('eq', day))
		setSunnah(existsYet[0])
	}

	// daily Sunnah
	async function insertSunnah(prayer) {
		const doesExist = await DataStore.query(SunnaSalah, c =>
			c.date('eq', today)
		)
		const original = doesExist[0]
		await DataStore.save(
			SunnaSalah.copyOf(original, updated => {
				switch (prayer) {
					case 'fajr':
						updated.fajr = true
						updated.status += 1
						break
					case 'dhuhr':
						updated.dhuhr = true
						updated.status += 1
						break
					case 'asr':
						updated.asr = true
						updated.status += 1
						break
					case 'magrib':
						updated.magrib = true
						updated.status += 1
						break
					case 'isha':
						updated.isha = true
						updated.status += 1
						break
					default:
						original
				}
			})
		)
		const savedObj = await DataStore.query(SunnaSalah, c => c.date('eq', today))
		await setSunnah(savedObj[0])
	}

	// first init tahajjud
	async function insertTodayTahajjud(day) {
		const doesExist = await DataStore.query(Tahajjud, c => c.date('eq', day))
		if (doesExist.length === 0) {
			let data = {
				date: day,
				two: false,
				four: false,
				eight: false,
				color: 'red',
				status: 0
			}
			await DataStore.save(new Tahajjud(data))
		}
		const existsYet = await DataStore.query(Tahajjud, c => c.date('eq', day))
		setTahajjud(existsYet[0])
	}

	// daily tahajjud
	async function insertTahajjud(prayer) {
		const doesExist = await DataStore.query(Tahajjud, c => c.date('eq', today))
		const original = doesExist[0]
		await DataStore.save(
			Tahajjud.copyOf(original, updated => {
				switch (prayer) {
					case 'two':
						updated.two = true
						updated.status += 1
						break
					case 'four':
						updated.four = true
						updated.status += 1
						break
					case 'eight':
						updated.eight = true
						updated.status += 1
						break
					default:
						original
				}
			})
		)
		const savedObj = await DataStore.query(Tahajjud, c => c.date('eq', today))
		await setTahajjud(savedObj[0])
	}

	// first init sadaqa
	async function insertTodaySadaqa(day) {
		const doesExist = await DataStore.query(Sadaqat, c => c.date('eq', day))
		if (doesExist.length === 0) {
			let data = {
				date: day,
				money: false,
				love: false,
				smile: false,
				lokma: false,
				color: 'yellow',
				status: 0
			}
			await DataStore.save(new Sadaqat(data))
		}
		const existsYet = await DataStore.query(Sadaqat, c => c.date('eq', day))
		setSadaqa(existsYet[0])
	}

	// daily sadaqa
	async function insertSadaqa(topic) {
		const doesExist = await DataStore.query(Sadaqat, c => c.date('eq', today))
		const original = doesExist[0]
		await DataStore.save(
			Sadaqat.copyOf(original, updated => {
				switch (topic) {
					case 'love':
						updated.love = true
						updated.status += 1
						break
					case 'smile':
						updated.smile = true
						updated.status += 1
						break
					case 'money':
						updated.money = true
						updated.status += 1
						break
					default:
						updated
				}
			})
		)
		const savedObj = await DataStore.query(Sadaqat, c => c.date('eq', today))
		await setSadaqa(savedObj[0])
	}

	// first init Morning Dua
	async function insertTodayDua(day) {
		const doesExist = await DataStore.query(MorningDua, c => c.date('eq', day))
		if (doesExist.length === 0) {
			let data = {
				date: day,
				morning: false,
				evening: false,
				color: 'yellow',
				status: 0
			}
			await DataStore.save(new MorningDua(data))
		}
		const existsYet = await DataStore.query(MorningDua, c => c.date('eq', day))
		await setMorningDua(existsYet[0])
	}

	// daily Dua
	async function insertDua(topic) {
		const doesExist = await DataStore.query(MorningDua, c =>
			c.date('eq', today)
		)
		const original = doesExist[0]
		await DataStore.save(
			MorningDua.copyOf(original, updated => {
				switch (topic) {
					case 'morning':
						updated.morning = true
						updated.status += 1
						break
					case 'evening':
						updated.evening = true
						updated.status += 1
						break
					default:
						updated
				}
			})
		)
		const savedObj = await DataStore.query(MorningDua, c => c.date('eq', today))
		await setMorningDua(savedObj[0])
		console.log(savedObj)
	}

	useEffect(() => {
		;(async function fetchData() {
			setLoading(true)
			const date = new Date()
			const day = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
			await setToday(day)
			await insertTodaySalah(day)
			await insertTodayQuran(day)
			await insertTodaySunnah(day)
			await insertTodayTahajjud(day)
			await insertTodaySadaqa(day)
			await insertTodayDua(day)
			//stuff
			setLoading(false)
		})()
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>WelCome, Kaiyes</Text>
			<Text style={styles.headerSubtitle}>Let's have a sunnah day</Text>

			<ScrollView contentContainerStyle={styles.scrollView}>
				{/* 1st row*/}
				{/* 1st row*/}

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
								<TouchableOpacity onPress={() => insertSalah('fajr')}>
									<Image
										source={require('../assets/icons/fajr.png')}
										style={styles.taskIcon}
										blurRadius={prayerObj.fajr === true ? 6 : 0}
										borderColor={prayerObj.fajr === true ? 'black' : null}
										borderWidth={prayerObj.fajr === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertSalah('dhuhr')}>
									<Image
										source={require('../assets/icons/dhuhr.png')}
										style={styles.taskIcon}
										blurRadius={prayerObj.dhuhr === true ? 6 : 0}
										borderColor={prayerObj.dhuhr === true ? 'black' : null}
										borderWidth={prayerObj.dhuhr === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertSalah('asr')}>
									<Image
										source={require('../assets/icons/asr.png')}
										style={styles.taskIcon}
										blurRadius={prayerObj.asr === true ? 6 : 0}
										borderColor={prayerObj.asr === true ? 'black' : null}
										borderWidth={prayerObj.asr === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertSalah('magrib')}>
									<Image
										source={require('../assets/icons/magrib.png')}
										style={styles.taskIcon}
										blurRadius={prayerObj.magrib === true ? 6 : 0}
										borderColor={prayerObj.magrib === true ? 'black' : null}
										borderWidth={prayerObj.magrib === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertSalah('isha')}>
									<Image
										source={require('../assets/icons/isha.png')}
										style={styles.taskIcon}
										blurRadius={prayerObj.isha === true ? 6 : 0}
										borderColor={prayerObj.isha === true ? 'black' : null}
										borderWidth={prayerObj.isha === true ? 5 : 0}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					{/*  Quran Card*/}
					{/*  Quran Card*/}

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
								<TouchableOpacity onPress={() => insertQuran('hundred')}>
									<Image
										source={require('../assets/icons/100.png')}
										style={styles.taskIcon}
										blurRadius={quran.hundred === true ? 6 : 0}
										borderColor={quran.hundred === true ? 'black' : null}
										borderWidth={quran.hundred === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertQuran('juz')}>
									<Image
										source={require('../assets/icons/1_juz.png')}
										style={styles.taskIcon}
										blurRadius={quran.juz === true ? 6 : 0}
										borderColor={quran.juz === true ? 'black' : null}
										borderWidth={quran.juz === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertQuran('manzil')}>
									<Image
										source={require('../assets/icons/1_monjil.png')}
										style={styles.taskIcon}
										blurRadius={quran.manzil === true ? 6 : 0}
										borderColor={quran.manzil === true ? 'black' : null}
										borderWidth={quran.manzil === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertQuran('mulk')}>
									<Image
										source={require('../assets/icons/1_page.png')}
										style={styles.taskIcon}
										blurRadius={quran.mulk === true ? 6 : 0}
										borderColor={quran.mulk === true ? 'black' : null}
										borderWidth={quran.mulk === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => insertQuran('lastAyatsBaqara')}>
									<Image
										source={require('../assets/icons/5_ayah.png')}
										style={styles.taskIcon}
										blurRadius={quran.lastAyatsBaqara === true ? 6 : 0}
										borderColor={
											quran.lastAyatsBaqara === true ? 'black' : null
										}
										borderWidth={quran.lastAyatsBaqara === true ? 5 : 0}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>

				{/* 2nd row*/}
				{/* 2nd row*/}

				<View style={styles.cardHolder}>
					{/* Sunnah Card */}
					{/* Sunnah Card */}

					<View style={styles.card}>
						<View style={styles.topRow}>
							<Image
								source={require('../assets/images/sunnah.png')}
								style={styles.image}
							/>
						</View>
						<View style={styles.bottomRow}>
							<Text style={styles.cardHeader}>Sunnah Salah</Text>
							<View style={styles.dotHolder}>
								<TouchableOpacity onPress={() => insertSunnah('fajr')}>
									<Image
										source={require('../assets/icons/fajr.png')}
										style={styles.taskIcon}
										blurRadius={sunnah.fajr === true ? 6 : 0}
										borderColor={sunnah.fajr === true ? 'black' : null}
										borderWidth={sunnah.fajr === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertSunnah('dhuhr')}>
									<Image
										source={require('../assets/icons/dhuhr.png')}
										style={styles.taskIcon}
										blurRadius={sunnah.dhuhr === true ? 6 : 0}
										borderColor={sunnah.dhuhr === true ? 'black' : null}
										borderWidth={sunnah.dhuhr === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertSunnah('asr')}>
									<Image
										source={require('../assets/icons/asr.png')}
										style={styles.taskIcon}
										blurRadius={sunnah.asr === true ? 6 : 0}
										borderColor={sunnah.asr === true ? 'black' : null}
										borderWidth={sunnah.asr === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertSunnah('magrib')}>
									<Image
										source={require('../assets/icons/magrib.png')}
										style={styles.taskIcon}
										blurRadius={sunnah.magrib === true ? 6 : 0}
										borderColor={sunnah.magrib === true ? 'black' : null}
										borderWidth={sunnah.magrib === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertSunnah('isha')}>
									<Image
										source={require('../assets/icons/isha.png')}
										style={styles.taskIcon}
										blurRadius={sunnah.isha === true ? 6 : 0}
										borderColor={sunnah.isha === true ? 'black' : null}
										borderWidth={sunnah.isha === true ? 5 : 0}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					{/*  Tahajjud card */}
					{/*  Tahajjud card */}

					<View style={styles.card}>
						<View style={styles.topRow}>
							<Image
								source={require('../assets/images/tahajjud.png')}
								style={styles.image}
							/>
						</View>
						<View style={styles.bottomRow}>
							<Text style={styles.cardHeader}>Tahajjud</Text>
							<View style={styles.dotHolder}>
								<TouchableOpacity onPress={() => insertTahajjud('two')}>
									<Image
										source={require('../assets/icons/2.png')}
										style={styles.taskIcon}
										blurRadius={tahajjud.two === true ? 6 : 0}
										borderColor={tahajjud.two === true ? 'black' : null}
										borderWidth={tahajjud.two === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertTahajjud('four')}>
									<Image
										source={require('../assets/icons/4.png')}
										style={styles.taskIcon}
										blurRadius={tahajjud.four === true ? 6 : 0}
										borderColor={tahajjud.four === true ? 'black' : null}
										borderWidth={tahajjud.four === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertTahajjud('eight')}>
									<Image
										source={require('../assets/icons/8.png')}
										style={styles.taskIcon}
										blurRadius={tahajjud.eight === true ? 6 : 0}
										borderColor={tahajjud.eight === true ? 'black' : null}
										borderWidth={tahajjud.eight === true ? 5 : 0}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>

				{/* 3rd row*/}
				{/* 3rd row*/}

				<View style={styles.cardHolder}>
					{/* Sadaqa Card */}
					{/* Sadaqa Card */}

					<View style={styles.card}>
						<View style={styles.topRow}>
							<Image
								source={require('../assets/images/sadaqa.png')}
								style={styles.image}
							/>
						</View>
						<View style={styles.bottomRow}>
							<Text style={styles.cardHeader}>Sadaqa</Text>
							<View style={styles.dotHolder}>
								<TouchableOpacity onPress={() => insertSadaqa('money')}>
									<Image
										source={require('../assets/icons/money.png')}
										style={styles.taskIcon}
										blurRadius={sadaqa.money === true ? 6 : 0}
										borderColor={sadaqa.money === true ? 'black' : null}
										borderWidth={sadaqa.money === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertSadaqa('love')}>
									<Image
										source={require('../assets/icons/intimate.jpg')}
										style={styles.taskIcon}
										blurRadius={sadaqa.love === true ? 6 : 0}
										borderColor={sadaqa.love === true ? 'black' : null}
										borderWidth={sadaqa.love === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertSadaqa('smile')}>
									<Image
										source={require('../assets/icons/smile.png')}
										style={styles.taskIcon}
										blurRadius={sadaqa.smile === true ? 6 : 0}
										borderColor={sadaqa.smile === true ? 'black' : null}
										borderWidth={sadaqa.smile === true ? 5 : 0}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					{/*  Tahajjud card */}
					{/*  Tahajjud card */}

					<View style={styles.card}>
						<View style={styles.topRow}>
							<Image
								source={require('../assets/images/morning.jpg')}
								style={styles.image}
							/>
						</View>
						<View style={styles.bottomRow}>
							<Text style={styles.cardHeader}>Morn/Even Dua</Text>
							<View style={styles.dotHolder}>
								<TouchableOpacity onPress={() => insertDua('morning')}>
									<Image
										source={require('../assets/icons/dhuhr.png')}
										style={styles.taskIcon}
										blurRadius={morningDua.morning === true ? 6 : 0}
										borderColor={morningDua.morning === true ? 'black' : null}
										borderWidth={morningDua.morning === true ? 5 : 0}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => insertDua('evening')}>
									<Image
										source={require('../assets/icons/moon_t.png')}
										style={styles.taskIcon}
										blurRadius={morningDua.evening === true ? 6 : 0}
										borderColor={morningDua.evening === true ? 'black' : null}
										borderWidth={morningDua.evening === true ? 5 : 0}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					{/*  3rd Row */}
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
