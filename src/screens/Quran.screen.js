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

import ProgressBar from 'react-native-progress/Bar'

import Suras from '../utility/suras.js'

export default function Quran({ navigation: { navigate } }) {
	function switchBarWidth(ayahNumber) {
		return ayahNumber < 10
			? 20
			: ayahNumber >= 10 && ayahNumber <= 30
			? 30
			: ayahNumber >= 30 && ayahNumber <= 50
			? 40
			: ayahNumber >= 50 && ayahNumber <= 100
			? 50
			: ayahNumber >= 100 && ayahNumber <= 150
			? 60
			: ayahNumber >= 150 && ayahNumber <= 200
			? 70
			: ayahNumber >= 200 && ayahNumber <= 300
			? 80
			: 10
	}

	function suraBlock(item) {
		return (
			<TouchableOpacity
				style={
					item.number % 2 === 0
						? [styles.suraBlock, { backgroundColor: 'palegoldenrod' }]
						: [styles.suraBlock, { backgroundColor: 'lemonchiffon' }]
				}
				onPress={() => {
					console.log(item)
					navigate('Sura', {
						suraName: item.transliteration_en,
						suraNumber: item.number
					})
				}}>
				<Text style={styles.number}>{item.number}</Text>

				<View style={styles.nameBlock}>
					<View style={styles.nameRow}>
						<Text style={styles.name}>{item.transliteration_en}</Text>
						<Text style={styles.italicSubtitle}>{item.transliteration_en}</Text>
					</View>

					<Text style={styles.subTitle}>
						{item.revelation_type} - {item.total_verses} verses
					</Text>

					<View style={styles.spacerV} />
					<ProgressBar
						progress={0.2}
						width={wp(`${switchBarWidth(item.total_verses)}`)}
						color={'tan'}
					/>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={Suras}
				keyExtractor={item => item.number.toString()}
				contentContainerStyle={styles.flatList}
				renderItem={({ item }) => suraBlock(item)}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lemonchiffon'
	},
	name: {
		fontSize: 17,
		fontFamily: 'Menlo'
	},
	suraBlock: {
		width: wp('100%'),
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: wp('5%'),
		paddingVertical: hp('3%')
	},
	subTitle: {
		fontSize: 14,
		fontWeight: '200',
		marginTop: hp('.5%')
	},
	number: {
		fontSize: 20,
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
	},
	spacerV: {
		height: hp('1%')
	}
})
