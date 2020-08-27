import React, { useState, useContext } from 'react'
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
import LanguageContext from '../utility/context'

export default function DuaDetail({ route, navigation }) {
	const { pageTitle_en, pageTitle_bn, duas } = route.params
	const { language } = useContext(LanguageContext)

	return (
		<SafeAreaView style={styles.rootView}>
			<View>
				<ScrollView contentContainerStyle={styles.backgroundScrollView}>
					<Text style={styles.title}>
						{language === 'bn' ? pageTitle_bn : pageTitle_en}
					</Text>

					{duas.map(item => (
						<View style={styles.section} key={item.arabic}>
							<Text style={styles.dua}>{item.arabic}</Text>
							{language === 'bn' ? (
								<>
									{item.transliteration_bn.length < 1 ? null : (
										<Text style={styles.spelling}>
											<Text style={styles.preSpell}>উচ্চারণ:</Text>
											{item.transliteration_bn}
										</Text>
									)}

									<View style={styles.secondContainer}>
										<Text style={styles.meaning}>
											<Text style={styles.preSpell}>অর্থ: </Text>
											{item.translations_bn}
										</Text>
									</View>
								</>
							) : (
								<>
									{item.transliteration_en.length < 1 ? null : (
										<Text style={styles.spelling}>
											<Text style={styles.preSpell}>Spelling: </Text>
											{item.transliteration_en}
										</Text>
									)}

									<View style={styles.secondContainer}>
										<Text style={styles.meaning}>
											<Text style={styles.preSpell}>Meaning: </Text>
											{item.translations_en}
										</Text>
									</View>
								</>
							)}
						</View>
					))}
				</ScrollView>
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
		textDecorationLine: 'underline',
		fontFamily: 'SolaimanLipiNormal'
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
		fontFamily: 'SolaimanLipiNormal',
		color: 'darkolivegreen',
		marginBottom: hp('2%')
	},
	preSpell: {
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: 'SolaimanLipiNormal',
		color: 'darkgreen',
		textDecorationLine: 'underline',
		marginRight: wp('10%')
	}
})
