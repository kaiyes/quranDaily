import React, { useState, useEffect } from 'react'
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	ScrollView,
	SafeAreaView
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'
//utility

import { DataStore } from '@aws-amplify/datastore'
import { Duas } from '../models'

export default function DuaDetail({ route, navigation }) {
	const [loading, setLoading] = useState(false)

	const { pageTitle_en, pageTitle_bn, duas } = route.params

	async function save() {
		const sortedDua = await duas.map(i => {
			return {
				arabic: i.arabic,
				translations: i.translations,
				transliteration: i.transliteration
			}
		})

		await DataStore.save(
			new Duas({
				pageTitle,
				category: 'uncategorised',
				duas: sortedDua
			})
		)

		const a = await DataStore.query(Duas)
		console.log(a)
	}

	return (
		<SafeAreaView style={styles.rootView}>
			<View>
				<ScrollView contentContainerStyle={styles.backgroundScrollView}>
					<Text style={styles.title}>{pageTitle_en}</Text>

					{duas.map(item => (
						<View style={styles.section} key={item.AyaID}>
							<Text style={styles.dua}>{item.arabic}</Text>

							<Text style={styles.spelling}>
								<Text style={styles.preSpell}>উচ্চারণ: </Text>
								{item.transliteration_en}
							</Text>

							<View style={styles.secondContainer}>
								<Text style={styles.meaning}>
									<Text style={styles.preSpell}>অর্থ: </Text>
									{item.translations_en}
								</Text>

								{item.bottom_en.length < 1 ? null : (
									<Text style={styles.meaning}>
										<Text style={styles.preSpell}>ফাজায়েল: </Text>
										{item.bottom_en}
									</Text>
								)}

								{item.reference_en.length < 1 ? null : (
									<Text style={styles.source}>
										<Text style={styles.preSpell}>উৎস: </Text>
										{item.reference_en}
									</Text>
								)}
							</View>
						</View>
					))}
				</ScrollView>
				<TouchableOpacity
					style={styles.floatingIcon}
					onPress={async () => await save()}>
					<Icon
						type={'feather'}
						name={'bookmark'}
						size={22}
						reverse
						color={'green'}
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	rootView: {
		flex: 1,
		backgroundColor: 'honeydew'
	},
	backgroundScrollView: {
		backgroundColor: 'honeydew',
		paddingHorizontal: wp('5%'),
		paddingTop: hp('2%')
	},
	secondContainer: {
		width: wp('90%')
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'darkolivegreen',
		textAlign: 'center',
		fontFamily: 'SolaimanLipiNormal',
		textDecorationLine: 'underline'
	},
	dua: {
		marginTop: hp('2%'),
		fontSize: 32,
		fontWeight: '300',
		textAlign: 'right',
		fontFamily: 'me_quran',
		color: 'darkolivegreen'
	},
	spelling: {
		marginTop: hp('3%'),
		fontSize: 18,
		fontWeight: '400',
		fontFamily: 'SolaimanLipiNormal',
		color: 'darkolivegreen'
	},
	meaning: {
		marginTop: hp('3%'),
		fontSize: 18,
		fontWeight: '400',
		fontFamily: 'SolaimanLipiNormal',
		color: 'darkolivegreen'
	},
	source: {
		marginTop: hp('2%'),
		fontSize: 16,
		fontWeight: '200',
		fontFamily: 'Menlo',
		color: 'darkolivegreen',
		marginBottom: hp('2%')
	},
	playButton: {
		position: 'absolute',
		right: wp('5%'),
		bottom: hp('3.5%'),
		width: wp('27%'),
		height: hp('20%')
	},
	preSpell: {
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: 'SolaimanLipiNormal',
		color: 'darkgreen',
		textDecorationLine: 'underline',
		marginRight: wp('10%')
	},
	backNav: {
		width: wp('100%'),
		height: hp('5%'),
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: wp('3.5%'),
		marginBottom: hp('2%'),
		borderBottomWidth: hp('.2%'),
		borderBottomColor: 'whitesmoke'
	},
	floatingIcon: {
		position: 'absolute',
		bottom: 10,
		right: 10
	}
})
