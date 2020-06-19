import React from 'react'
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
			<ScrollView style={styles.backgroundScrollView}>
				<Text style={styles.title}>{pageTitle}</Text>

				{duas.map(item => (
					<View style={styles.section} key={item.AyaID}>
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

							{item.bottom.length < 1 ? null : (
								<Text style={styles.meaning}>
									<Text style={styles.preSpell}>ফাজায়েল:</Text>
									{item.bottom}
								</Text>
							)}

							{item.reference.length < 1 ? null : (
								<Text style={styles.source}>
									<Text style={styles.preSpell}>উৎস:</Text>
									{item.reference}
								</Text>
							)}
						</View>
					</View>
				))}
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	rootView: {
		flex: 1,
		backgroundColor: 'honeydew',
		paddingTop: hp('4%'),
		paddingBottom: hp('5%')
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
		fontFamily: 'Menlo',
		color: 'darkolivegreen'
	},
	meaning: {
		marginTop: hp('3%'),
		fontSize: 18,
		fontWeight: '400',
		fontFamily: 'Menlo',
		color: 'darkolivegreen'
	},
	source: {
		marginTop: hp('2%'),
		fontSize: 16,
		fontWeight: '200',
		fontFamily: 'Menlo',
		color: 'darkolivegreen'
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
		fontFamily: 'Menlo',
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
	}
})
