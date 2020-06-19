import React, { useState, useEffect } from 'react'
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	FlatList,
	TouchableOpacity
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import Sura from '../utility/suras/1'
import '../assets/fonts/me_quran.ttf'

export default function Quran({ route }) {
	const { suraName, suraNumber } = route.params
	const [sura, setSura] = useState([])

	function fetchSura() {
		let suraObject
		switch (suraNumber) {
			case 1:
				suraObject = require('../utility/suras/1')
				setSura(suraObject.default.verses)
				break
			case 2:
				suraObject = require('../utility/suras/2')
				setSura(suraObject.default.verses)
				break
			case 3:
				suraObject = require('../utility/suras/3')
				setSura(suraObject.default.verses)
				break
			case 4:
				suraObject = require('../utility/suras/4')
				setSura(suraObject.default.verses)
				break
			case 5:
				suraObject = require('../utility/suras/5')
				setSura(suraObject.default.verses)
				break
			case 6:
				suraObject = require('../utility/suras/6')
				setSura(suraObject.default.verses)
				break
			case 7:
				suraObject = require('../utility/suras/7')
				setSura(suraObject.default.verses)
				break
			case 8:
				suraObject = require('../utility/suras/8')
				setSura(suraObject.default.verses)
				break
			case 9:
				suraObject = require('../utility/suras/9')
				setSura(suraObject.default.verses)
				break
			case 10:
				suraObject = require('../utility/suras/10')
				setSura(suraObject.default.verses)
				break
			case 11:
				suraObject = require('../utility/suras/11')
				setSura(suraObject.default.verses)
				break
			case 12:
				suraObject = require('../utility/suras/12')
				setSura(suraObject.default.verses)
				break
			case 13:
				suraObject = require('../utility/suras/13')
				setSura(suraObject.default.verses)
				break
			case 14:
				suraObject = require('../utility/suras/14')
				setSura(suraObject.default.verses)
				break
			case 15:
				suraObject = require('../utility/suras/15')
				setSura(suraObject.default.verses)
				break
			case 16:
				suraObject = require('../utility/suras/16')
				setSura(suraObject.default.verses)
				break
			default:
				suraObject = require('../utility/suras/1')
				setSura(suraObject.default.verses)
		}
	}

	function ayah(item) {
		return (
			<View style={styles.ayahBlock}>
				<Text style={styles.ayahArabic} onPress={() => fetchSura()}>
					{item.text}
				</Text>
				<Text style={styles.translation}>{item.translation_en}</Text>
			</View>
		)
	}

	useEffect(() => {
		fetchSura()
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={sura}
				keyExtractor={item => item.number}
				contentContainerStyle={styles.flatList}
				renderItem={({ item }) => ayah(item)}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lemonchiffon'
	},
	ayahArabic: {
		fontSize: 32,
		fontFamily: 'me_quran',
		marginBottom: hp('1%')
	},
	ayahBlock: {
		width: wp('100%'),
		alignItems: 'flex-end',
		paddingHorizontal: wp('4%'),
		paddingBottom: hp('2%'),
		paddingTop: hp('1%'),
		marginBottom: hp('1%'),
		borderBottomWidth: 1,
		borderBottomColor: 'silver'
	},
	translation: {
		fontSize: 17,
		fontFamily: 'Menlo',
		marginVertical: hp('1%')
	}
})
