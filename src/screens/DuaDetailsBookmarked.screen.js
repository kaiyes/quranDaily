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
import '../assets/fonts/me_quran.ttf'

export default function DuaDetail({ route, navigation }) {
	const { pageTitle, duas } = route.params

	return (
		<SafeAreaView style={styles.rootView}>
			<View>
				<ScrollView contentContainerStyle={styles.backgroundScrollView}>
					<Text style={styles.title}>{pageTitle}</Text>

					{duas.map(item => (
						<View style={styles.section} key={Math.random().toString()}>
							<Text style={styles.dua}>{item.arabic}</Text>

							<Text style={styles.spelling}>
								<Text style={styles.preSpell}>উচ্চারণ:</Text>
								{item.transliteration}
							</Text>

							<View style={styles.secondContainer}>
								<Text style={styles.meaning}>
									<Text style={styles.preSpell}>অর্থ:</Text>
									{item.translations}
								</Text>
							</View>
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
