import React from 'react'
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

import Sura from '../utility/sura.js'
import '../assets/fonts/me_quran.ttf'

export default function Quran({ route }) {
	const { suraName } = route.params

	function ayah(item) {
		return (
			<View style={styles.ayahBlock}>
				<Text style={styles.ayah}>{item.text}</Text>
				<Text style={styles.translation}>{item.translation_en}</Text>
			</View>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={Sura.verses}
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
	ayah: {
		fontSize: 32,
		fontFamily: 'me_quran',
		marginBottom: hp('1%')
	},
	name: {
		fontSize: 17,
		fontFamily: 'Menlo'
	},
	ayahBlock: {
		width: wp('100%'),
		alignItems: 'flex-end',
		paddingHorizontal: wp('4%'),
		paddingVertical: hp('1%'),
		marginBottom: hp('2%'),
		borderBottomWidth: 1,
		borderBottomColor: 'silver'
	},
	suraBlock: {
		width: wp('100%'),
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: wp('5%'),
		paddingVertical: hp('3%')
	},
	translation: {
		fontSize: 17,
		fontFamily: 'Menlo',
		marginBottom: hp('1%')
	},
	subTitle: {
		fontSize: 14,
		fontWeight: '200',
		marginTop: hp('.5%')
	},
	number: {
		fontSize: 24,
		marginRight: wp('4%')
	},
	nameRow: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	italicSubtitle: {
		fontWeight: '200',
		fontStyle: 'italic',
		marginLeft: wp('2%')
	}
})
