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

import FakeData from '../utility/fakeData'

import { DataStore } from '@aws-amplify/datastore'
import { FardSalah } from '../models'

export default function Deeds({ navigation }) {
	const [loading, setLoading] = useState(false)
	const [today, setToday] = useState('')

	//prayer
	async function insertSalah(prayer) {
		const doesExist = await DataStore.query(FardSalah, c => c.date('eq', today))
		if (doesExist.length === 0) {
			let data = {
				date: today,
				fajr: false,
				dhuhr: false,
				asr: false,
				magrib: false,
				isha: false,
				color: 'green',
				status: 1
			}

			switch (prayer) {
				case 'fajr':
					data.fajr = true
					break
				case 'dhuhr':
					data.dhuhr = true
					break
				case 'asr':
					data.asr = true
					break
				case 'magrib':
					data.magrib = true
					break
				case 'isha':
					data.isha = true
					break
				default:
					data
			}

			await DataStore.save(new FardSalah(data))
		} else {
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
		}
	}

	function renderItem({ item: { status, topicName, topic, subTasks, image } }) {
		return (
			<View style={styles.card}>
				<View style={styles.topRow}>
					<Image source={image} style={styles.image} />
				</View>
				<View style={styles.bottomRow}>
					<Text style={styles.cardHeader}>{topicName}</Text>
					<View style={styles.dotHolder}>
						{subTasks.map(task => (
							<TouchableOpacity
								key={Math.random()}
								onPress={() => insertSalah('asr')}>
								<Image
									source={task.icon}
									style={styles.taskIcon}
									blurRadius={task.done ? 10 : null}
									borderColor={'green'}
									borderWidth={task.done ? 4 : 0}
								/>
								{task.done ? (
									<Icon
										type={'entypo'}
										name={'check'}
										size={21}
										color={'green'}
										containerStyle={styles.iconCheck}
									/>
								) : null}
							</TouchableOpacity>
						))}
					</View>
				</View>
			</View>
		)
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
				color: 'green',
				status: 0
			}
			await DataStore.save(new FardSalah(data))
		}
		//stuff
	}

	useEffect(() => {
		;(async function fetchData() {
			setLoading(true)
			const date = new Date()
			const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
			await setToday(today)
			await insertTodaySalah(today)
			//stuff
			setLoading(false)
		})()
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>WelCome, Kaiyes</Text>
			<Text style={styles.headerSubtitle}>Let's have a sunnah day</Text>

			<FlatList
				data={FakeData}
				keyExtractor={item => item.topicName}
				contentContainerStyle={styles.flatList}
				numColumns={2}
				ListFooterComponent={() => <View style={styles.footer} />}
				renderItem={item => renderItem(item)}
			/>
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
	}
})
