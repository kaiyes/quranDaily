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
			case 17:
				suraObject = require('../utility/suras/17')
				setSura(suraObject.default.verses)
				break
			case 18:
				suraObject = require('../utility/suras/18')
				setSura(suraObject.default.verses)
				break
			case 19:
				suraObject = require('../utility/suras/19')
				setSura(suraObject.default.verses)
				break
			case 20:
				suraObject = require('../utility/suras/20')
				setSura(suraObject.default.verses)
				break
			case 21:
				suraObject = require('../utility/suras/21')
				setSura(suraObject.default.verses)
				break
			case 22:
				suraObject = require('../utility/suras/22')
				setSura(suraObject.default.verses)
				break
			case 23:
				suraObject = require('../utility/suras/23')
				setSura(suraObject.default.verses)
				break
			case 24:
				suraObject = require('../utility/suras/24')
				setSura(suraObject.default.verses)
				break
			case 25:
				suraObject = require('../utility/suras/25')
				setSura(suraObject.default.verses)
				break
			case 26:
				suraObject = require('../utility/suras/26')
				setSura(suraObject.default.verses)
				break
			case 27:
				suraObject = require('../utility/suras/27')
				setSura(suraObject.default.verses)
				break
			case 28:
				suraObject = require('../utility/suras/28')
				setSura(suraObject.default.verses)
				break
			case 29:
				suraObject = require('../utility/suras/29')
				setSura(suraObject.default.verses)
				break
			case 30:
				suraObject = require('../utility/suras/30')
				setSura(suraObject.default.verses)
				break
			case 31:
				suraObject = require('../utility/suras/31')
				setSura(suraObject.default.verses)
				break
			case 32:
				suraObject = require('../utility/suras/32')
				setSura(suraObject.default.verses)
				break
			case 33:
				suraObject = require('../utility/suras/33')
				setSura(suraObject.default.verses)
				break
			case 34:
				suraObject = require('../utility/suras/34')
				setSura(suraObject.default.verses)
				break
			case 35:
				suraObject = require('../utility/suras/35')
				setSura(suraObject.default.verses)
				break
			case 36:
				suraObject = require('../utility/suras/36')
				setSura(suraObject.default.verses)
				break
			case 37:
				suraObject = require('../utility/suras/37')
				setSura(suraObject.default.verses)
				break
			case 38:
				suraObject = require('../utility/suras/38')
				setSura(suraObject.default.verses)
				break
			case 39:
				suraObject = require('../utility/suras/39')
				setSura(suraObject.default.verses)
				break
			case 40:
				suraObject = require('../utility/suras/40')
				setSura(suraObject.default.verses)
				break
			case 41:
				suraObject = require('../utility/suras/41')
				setSura(suraObject.default.verses)
				break
			case 42:
				suraObject = require('../utility/suras/42')
				setSura(suraObject.default.verses)
				break
			case 43:
				suraObject = require('../utility/suras/43')
				setSura(suraObject.default.verses)
				break
			case 44:
				suraObject = require('../utility/suras/44')
				setSura(suraObject.default.verses)
				break
			case 45:
				suraObject = require('../utility/suras/45')
				setSura(suraObject.default.verses)
				break
			case 46:
				suraObject = require('../utility/suras/46')
				setSura(suraObject.default.verses)
				break
			case 47:
				suraObject = require('../utility/suras/47')
				setSura(suraObject.default.verses)
				break
			case 48:
				suraObject = require('../utility/suras/48')
				setSura(suraObject.default.verses)
				break
			case 49:
				suraObject = require('../utility/suras/49')
				setSura(suraObject.default.verses)
				break
			case 50:
				suraObject = require('../utility/suras/50')
				setSura(suraObject.default.verses)
				break
			case 51:
				suraObject = require('../utility/suras/51')
				setSura(suraObject.default.verses)
				break
			case 52:
				suraObject = require('../utility/suras/52')
				setSura(suraObject.default.verses)
				break
			case 53:
				suraObject = require('../utility/suras/53')
				setSura(suraObject.default.verses)
				break
			case 54:
				suraObject = require('../utility/suras/54')
				setSura(suraObject.default.verses)
				break
			case 55:
				suraObject = require('../utility/suras/55')
				setSura(suraObject.default.verses)
				break
			case 56:
				suraObject = require('../utility/suras/56')
				setSura(suraObject.default.verses)
				break
			case 57:
				suraObject = require('../utility/suras/57')
				setSura(suraObject.default.verses)
				break
			case 58:
				suraObject = require('../utility/suras/58')
				setSura(suraObject.default.verses)
				break
			case 59:
				suraObject = require('../utility/suras/59')
				setSura(suraObject.default.verses)
				break
			case 60:
				suraObject = require('../utility/suras/60')
				setSura(suraObject.default.verses)
				break
			case 61:
				suraObject = require('../utility/suras/61')
				setSura(suraObject.default.verses)
				break
			case 62:
				suraObject = require('../utility/suras/62')
				setSura(suraObject.default.verses)
				break
			case 63:
				suraObject = require('../utility/suras/63')
				setSura(suraObject.default.verses)
				break
			case 64:
				suraObject = require('../utility/suras/64')
				setSura(suraObject.default.verses)
				break
			case 65:
				suraObject = require('../utility/suras/65')
				setSura(suraObject.default.verses)
				break
			case 66:
				suraObject = require('../utility/suras/66')
				setSura(suraObject.default.verses)
				break
			case 67:
				suraObject = require('../utility/suras/67')
				setSura(suraObject.default.verses)
				break
			case 68:
				suraObject = require('../utility/suras/68')
				setSura(suraObject.default.verses)
				break
			case 69:
				suraObject = require('../utility/suras/69')
				setSura(suraObject.default.verses)
				break
			case 70:
				suraObject = require('../utility/suras/70')
				setSura(suraObject.default.verses)
				break
			case 71:
				suraObject = require('../utility/suras/71')
				setSura(suraObject.default.verses)
				break
			case 72:
				suraObject = require('../utility/suras/72')
				setSura(suraObject.default.verses)
				break
			case 73:
				suraObject = require('../utility/suras/73')
				setSura(suraObject.default.verses)
				break
			case 74:
				suraObject = require('../utility/suras/74')
				setSura(suraObject.default.verses)
				break
			case 75:
				suraObject = require('../utility/suras/75')
				setSura(suraObject.default.verses)
				break
			case 76:
				suraObject = require('../utility/suras/76')
				setSura(suraObject.default.verses)
				break
			case 77:
				suraObject = require('../utility/suras/77')
				setSura(suraObject.default.verses)
				break
			case 78:
				suraObject = require('../utility/suras/78')
				setSura(suraObject.default.verses)
				break
			case 79:
				suraObject = require('../utility/suras/79')
				setSura(suraObject.default.verses)
				break
			case 80:
				suraObject = require('../utility/suras/80')
				setSura(suraObject.default.verses)
				break
			case 81:
				suraObject = require('../utility/suras/81')
				setSura(suraObject.default.verses)
				break
			case 82:
				suraObject = require('../utility/suras/82')
				setSura(suraObject.default.verses)
				break
			case 83:
				suraObject = require('../utility/suras/83')
				setSura(suraObject.default.verses)
				break
			case 84:
				suraObject = require('../utility/suras/84')
				setSura(suraObject.default.verses)
				break
			case 85:
				suraObject = require('../utility/suras/85')
				setSura(suraObject.default.verses)
				break
			case 86:
				suraObject = require('../utility/suras/85')
				setSura(suraObject.default.verses)
				break
			case 87:
				suraObject = require('../utility/suras/87')
				setSura(suraObject.default.verses)
				break
			case 88:
				suraObject = require('../utility/suras/88')
				setSura(suraObject.default.verses)
				break
			case 89:
				suraObject = require('../utility/suras/89')
				setSura(suraObject.default.verses)
				break
			case 90:
				suraObject = require('../utility/suras/90')
				setSura(suraObject.default.verses)
				break
			case 91:
				suraObject = require('../utility/suras/91')
				setSura(suraObject.default.verses)
				break
			case 92:
				suraObject = require('../utility/suras/92')
				setSura(suraObject.default.verses)
				break
			case 93:
				suraObject = require('../utility/suras/93')
				setSura(suraObject.default.verses)
				break
			case 94:
				suraObject = require('../utility/suras/94')
				setSura(suraObject.default.verses)
				break
			case 95:
				suraObject = require('../utility/suras/95')
				setSura(suraObject.default.verses)
				break
			case 96:
				suraObject = require('../utility/suras/96')
				setSura(suraObject.default.verses)
				break
			case 97:
				suraObject = require('../utility/suras/97')
				setSura(suraObject.default.verses)
				break
			case 98:
				suraObject = require('../utility/suras/98')
				setSura(suraObject.default.verses)
				break
			case 99:
				suraObject = require('../utility/suras/99')
				setSura(suraObject.default.verses)
				break
			case 100:
				suraObject = require('../utility/suras/100')
				setSura(suraObject.default.verses)
				break
			case 101:
				suraObject = require('../utility/suras/101')
				setSura(suraObject.default.verses)
				break
			case 102:
				suraObject = require('../utility/suras/102')
				setSura(suraObject.default.verses)
				break
			case 103:
				suraObject = require('../utility/suras/103')
				setSura(suraObject.default.verses)
				break
			case 104:
				suraObject = require('../utility/suras/104')
				setSura(suraObject.default.verses)
				break
			case 105:
				suraObject = require('../utility/suras/105')
				setSura(suraObject.default.verses)
				break
			case 106:
				suraObject = require('../utility/suras/106')
				setSura(suraObject.default.verses)
				break
			case 107:
				suraObject = require('../utility/suras/107')
				setSura(suraObject.default.verses)
				break
			case 108:
				suraObject = require('../utility/suras/108')
				setSura(suraObject.default.verses)
				break
			case 109:
				suraObject = require('../utility/suras/109')
				setSura(suraObject.default.verses)
				break
			case 110:
				suraObject = require('../utility/suras/110')
				setSura(suraObject.default.verses)
				break
			case 111:
				suraObject = require('../utility/suras/111')
				setSura(suraObject.default.verses)
				break
			case 112:
				suraObject = require('../utility/suras/112')
				setSura(suraObject.default.verses)
				break
			case 113:
				suraObject = require('../utility/suras/113')
				setSura(suraObject.default.verses)
				break
			case 114:
				suraObject = require('../utility/suras/114')
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
				keyExtractor={item => item.number.toString()}
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
		marginBottom: hp('1%'),
		textAlign: 'right'
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
