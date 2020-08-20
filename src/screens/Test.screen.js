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
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.s}>sss</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lemonchiffon',
		justifyContent: 'center',
		alignItems: 'center'
	},
	card: {
		shadowOpacity: 0.2,
		shadowRadius: 5,
		shadowColor: '#333333',
		shadowOffset: { height: 5, width: 2.5 }
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
	},

	suraPage: {
		paddingHorizontal: wp('3%')
	},
	ayat: {
		fontSize: 24,
		fontFamily: 'me_quran',
		textAlign: 'right',
		flexWrap: 'wrap',
		width: wp('90%')
	},
	ayatForPage: {
		fontSize: 22,
		fontFamily: 'me_quran',
		textAlign: 'justify'
	}
})
