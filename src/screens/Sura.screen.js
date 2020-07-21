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
import Loader from '../components/loader'
import ViewPager from '@react-native-community/viewpager'

import '../assets/fonts/me_quran.ttf'

export default function Sura({ route }) {
	function fetchSura() {
		let data
		switch (suraNumber) {
			case 1:
				data = require('../utility/suras/1')
				setSura(data)
				break
			case 2:
				data = require('../utility/suras/2')
				setSura(data)
				break
			case 3:
				data = require('../utility/suras/3')
				setSura(data)
				break
			case 4:
				data = require('../utility/suras/4')
				setSura(data)
				break
			case 5:
				data = require('../utility/suras/5')
				setSura(data)
				break
			case 6:
				data = require('../utility/suras/6')
				setSura(data)
				break
			case 7:
				data = require('../utility/suras/7')
				setSura(data)
				break
			case 8:
				data = require('../utility/suras/8')
				setSura(data)
				break
			case 9:
				data = require('../utility/suras/9')
				setSura(data)
				break
			case 10:
				data = require('../utility/suras/10')
				setSura(data)
				break
			case 11:
				data = require('../utility/suras/11')
				setSura(data)
				break
			case 12:
				data = require('../utility/suras/12')
				setSura(data)
				break
			case 13:
				data = require('../utility/suras/13')
				setSura(data)
				break
			case 14:
				data = require('../utility/suras/14')
				setSura(data)
				break
			case 15:
				data = require('../utility/suras/15')
				setSura(data)
				break
			case 16:
				data = require('../utility/suras/16')
				setSura(data)
				break
			case 17:
				data = require('../utility/suras/17')
				setSura(data)
				break
			case 18:
				data = require('../utility/suras/18')
				setSura(data)
				break
			case 19:
				data = require('../utility/suras/19')
				setSura(data)
				break
			case 20:
				data = require('../utility/suras/20')
				setSura(data)
				break
			case 21:
				data = require('../utility/suras/21')
				setSura(data)
				break
			case 22:
				data = require('../utility/suras/22')
				setSura(data)
				break
			case 23:
				data = require('../utility/suras/23')
				setSura(data)
				break
			case 24:
				data = require('../utility/suras/24')
				setSura(data)
				break
			case 25:
				data = require('../utility/suras/25')
				setSura(data)
				break
			case 26:
				data = require('../utility/suras/26')
				setSura(data)
				break
			case 27:
				data = require('../utility/suras/27')
				setSura(data)
				break
			case 28:
				data = require('../utility/suras/28')
				setSura(data)
				break
			case 29:
				data = require('../utility/suras/29')
				setSura(data)
				break
			case 30:
				data = require('../utility/suras/30')
				setSura(data)
				break
			case 31:
				data = require('../utility/suras/31')
				setSura(data)
				break
			case 32:
				data = require('../utility/suras/32')
				setSura(data)
				break
			case 33:
				data = require('../utility/suras/33')
				setSura(data)
				break
			case 34:
				data = require('../utility/suras/34')
				setSura(data)
				break
			case 35:
				data = require('../utility/suras/35')
				setSura(data)
				break
			case 36:
				data = require('../utility/suras/36')
				setSura(data)
				break
			case 37:
				data = require('../utility/suras/37')
				setSura(data)
				break
			case 38:
				data = require('../utility/suras/38')
				setSura(data)
				break
			case 39:
				data = require('../utility/suras/39')
				setSura(data)
				break
			case 40:
				data = require('../utility/suras/40')
				setSura(data)
				break
			case 41:
				data = require('../utility/suras/41')
				setSura(data)
				break
			case 42:
				data = require('../utility/suras/42')
				setSura(data)
				break
			case 43:
				data = require('../utility/suras/43')
				setSura(data)
				break
			case 44:
				data = require('../utility/suras/44')
				setSura(data)
				break
			case 45:
				data = require('../utility/suras/45')
				setSura(data)
				break
			case 46:
				data = require('../utility/suras/46')
				setSura(data)
				break
			case 47:
				data = require('../utility/suras/47')
				setSura(data)
				break
			case 48:
				data = require('../utility/suras/48')
				setSura(data)
				break
			case 49:
				data = require('../utility/suras/49')
				setSura(data)
				break
			case 50:
				data = require('../utility/suras/50')
				setSura(data)
				break
			case 51:
				data = require('../utility/suras/51')
				setSura(data)
				break
			case 52:
				data = require('../utility/suras/52')
				setSura(data)
				break
			case 53:
				data = require('../utility/suras/53')
				setSura(data)
				break
			case 54:
				data = require('../utility/suras/54')
				setSura(data)
				break
			case 55:
				data = require('../utility/suras/55')
				setSura(data)
				break
			case 56:
				data = require('../utility/suras/56')
				setSura(data)
				break
			case 57:
				data = require('../utility/suras/57')
				setSura(data)
				break
			case 58:
				data = require('../utility/suras/58')
				setSura(data)
				break
			case 59:
				data = require('../utility/suras/59')
				setSura(data)
				break
			case 60:
				data = require('../utility/suras/60')
				setSura(data)
				break
			case 61:
				data = require('../utility/suras/61')
				setSura(data)
				break
			case 62:
				data = require('../utility/suras/62')
				setSura(data)
				break
			case 63:
				data = require('../utility/suras/63')
				setSura(data)
				break
			case 64:
				data = require('../utility/suras/64')
				setSura(data)
				break
			case 65:
				data = require('../utility/suras/65')
				setSura(data)
				break
			case 66:
				data = require('../utility/suras/66')
				setSura(data)
				break
			case 67:
				data = require('../utility/suras/67')
				setSura(data)
				break
			case 68:
				data = require('../utility/suras/68')
				setSura(data)
				break
			case 69:
				data = require('../utility/suras/69')
				setSura(data)
				break
			case 70:
				data = require('../utility/suras/70')
				setSura(data)
				break
			case 71:
				data = require('../utility/suras/71')
				setSura(data)
				break
			case 72:
				data = require('../utility/suras/72')
				setSura(data)
				break
			case 73:
				data = require('../utility/suras/73')
				setSura(data)
				break
			case 74:
				data = require('../utility/suras/74')
				setSura(data)
				break
			case 75:
				data = require('../utility/suras/75')
				setSura(data)
				break
			case 76:
				data = require('../utility/suras/76')
				setSura(data)
				break
			case 77:
				data = require('../utility/suras/77')
				setSura(data)
				break
			case 78:
				data = require('../utility/suras/78')
				setSura(data)
				break
			case 79:
				data = require('../utility/suras/79')
				setSura(data)
				break
			case 80:
				data = require('../utility/suras/80')
				setSura(data)
				break
			case 81:
				data = require('../utility/suras/81')
				setSura(data)
				break
			case 82:
				data = require('../utility/suras/82')
				setSura(data)
				break
			case 83:
				data = require('../utility/suras/83')
				setSura(data)
				break
			case 84:
				data = require('../utility/suras/84')
				setSura(data)
				break
			case 85:
				data = require('../utility/suras/85')
				setSura(data)
				break
			case 86:
				data = require('../utility/suras/85')
				setSura(data)
				break
			case 87:
				data = require('../utility/suras/87')
				setSura(data)
				break
			case 88:
				data = require('../utility/suras/88')
				setSura(data)
				break
			case 89:
				data = require('../utility/suras/89')
				setSura(data)
				break
			case 90:
				data = require('../utility/suras/90')
				setSura(data)
				break
			case 91:
				data = require('../utility/suras/91')
				setSura(data)
				break
			case 92:
				data = require('../utility/suras/92')
				setSura(data)
				break
			case 93:
				data = require('../utility/suras/93')
				setSura(data)
				break
			case 94:
				data = require('../utility/suras/94')
				setSura(data)
				break
			case 95:
				data = require('../utility/suras/95')
				setSura(data)
				break
			case 96:
				data = require('../utility/suras/96')
				setSura(data)
				break
			case 97:
				data = require('../utility/suras/97')
				setSura(data)
				break
			case 98:
				data = require('../utility/suras/98')
				setSura(data)
				break
			case 99:
				data = require('../utility/suras/99')
				setSura(data)
				break
			case 100:
				data = require('../utility/suras/100')
				setSura(data)
				break
			case 101:
				data = require('../utility/suras/101')
				setSura(data)
				break
			case 102:
				data = require('../utility/suras/102')
				setSura(data)
				break
			case 103:
				data = require('../utility/suras/103')
				setSura(data)
				break
			case 104:
				data = require('../utility/suras/104')
				setSura(data)
				break
			case 105:
				data = require('../utility/suras/105')
				setSura(data)
				break
			case 106:
				data = require('../utility/suras/106')
				setSura(data)
				break
			case 107:
				data = require('../utility/suras/107')
				setSura(data)
				break
			case 108:
				data = require('../utility/suras/108')
				setSura(data)
				break
			case 109:
				data = require('../utility/suras/109')
				setSura(data)
				break
			case 110:
				data = require('../utility/suras/110')
				setSura(data)
				break
			case 111:
				data = require('../utility/suras/111')
				setSura(data)
				break
			case 112:
				data = require('../utility/suras/112')
				setSura(data)
				break
			case 113:
				data = require('../utility/suras/113')
				setSura(data)
				break
			case 114:
				data = require('../utility/suras/114')
				setSura(data)
				break
			default:
				data = require('../utility/suras/1')
				setSura(data)
		}
	}

	const [sura, setSura] = useState([])
	const [loading, setLoading] = useState(false)

	const { language, renderStyle, suraName, suraNumber } = route.params

	function Card(item) {
		return (
			<View style={styles.ayahBlock}>
				<Text style={styles.ayahArabic} onPress={() => fetchSura()}>
					{item.ayat}
				</Text>
				<Text style={styles.ayahArabic} onPress={() => fetchSura()}>
					{item.index}
				</Text>

				<Text style={styles.translation}>
					{language === 'bn' ? item.translation_bn : item.translation_en}
				</Text>
			</View>
		)
	}

	function List() {
		return loading ? (
			Loader()
		) : (
			<SafeAreaView style={styles.container}>
				<FlatList
					data={sura}
					keyExtractor={item => item.id.toString()}
					contentContainerStyle={styles.flatList}
					renderItem={({ item }) => Card(item)}
				/>
			</SafeAreaView>
		)
	}

	function Pager() {
		return (
			<ViewPager initialPage={0} style={styles.container}>
				{[1, 2, 3].map(item => (
					<View style={styles.container} key={0}>
						<Text style={styles.ayahArabic}>something</Text>
					</View>
				))}
			</ViewPager>
		)
	}

	useEffect(() => {
		;(async function fetchData() {
			setLoading(true)
			await fetchSura()
			setLoading(false)
		})()
	}, [])

	return renderStyle === 'list' ? List() : Pager()
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
