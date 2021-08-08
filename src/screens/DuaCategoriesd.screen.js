import React, { useContext } from 'react'
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
import Duas from '../utility/dua'
import LanguageContext from '../utility/context'

export default function Categorised({ route, navigation }) {
	const { pageTitle, category } = route.params
	const { language } = useContext(LanguageContext)

	function goToDetail(item) {
		navigation.navigate('DuaDetail', {
			pageTitle_en: item.pageTitle_en,
			pageTitle_bn: item.pageTitle_bn,
			duas: item.duas
		})
	}

	return (
		<FlatList
			data={Duas.filter(item => item.category == category)}
			keyExtractor={item => item.key}
			contentContainerStyle={styles.flatList}
			style={styles.backgroundScrollView}
			renderItem={({ item, index }) => (
				<TouchableOpacity style={styles.item} onPress={() => goToDetail(item)}>
					<View style={styles.circle}>
						<Text style={styles.number}>{index + 1}</Text>
					</View>
					<Text style={styles.title}>
						{language === 'bn' ? item.pageTitle_bn : item.pageTitle_en}
					</Text>
				</TouchableOpacity>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	backgroundScrollView: {
		backgroundColor: 'honeydew'
	},
	flatList: {
		backgroundColor: 'honeydew'
	},
	item: {
		width: wp('95%'),
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 12
	},
	circle: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: 'lightgreen',
		marginRight: wp('5%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	number: {
		fontWeight: '500',
		fontSize: hp('2%'),
		color: 'darkolivegreen',
		fontFamily: 'Menlo'
	},
	title: {
		fontWeight: '400',
		fontSize: Platform.OS === 'ios' ? hp('2%') : hp('3%'),
		color: 'darkolivegreen',
		fontFamily: 'SolaimanLipiNormal',
		width: wp('75%')
	},
	backNav: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: wp('100%'),
		height: hp('10%'),
		alignItems: 'flex-start',
		paddingLeft: wp('3.5%'),
		paddingTop: hp('6%'),
		backgroundColor: 'honeydew',
		borderBottomWidth: hp('.2%'),
		borderBottomColor: 'whitesmoke'
	},
	navHeader: {
		fontWeight: 'bold',
		fontSize: hp('3%'),
		color: 'darkolivegreen',
		fontFamily: 'Menlo',
		marginLeft: wp('22%')
	}
})
