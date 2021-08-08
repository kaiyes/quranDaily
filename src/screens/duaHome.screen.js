import React, { useContext } from 'react'
import {
	StyleSheet,
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	FlatList,
	SafeAreaView,
	ScrollView
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Icon, CheckBox } from 'react-native-elements'
import { Notifier, Easing, NotifierComponents } from 'react-native-notifier'
//Utility
import Categories from '../utility/categories'
import LanguageContext from '../utility/context'

export default function DuaHome({ navigation: { navigate } }) {
	const { language, setLanguage } = useContext(LanguageContext)

	async function changeLang(lang) {
		await setLanguage(lang)
		Notifier.showNotification({
			title: 'language changed',
			duration: 1000,
			showAnimationDuration: 220,
			Component: NotifierComponents.Alert,
			componentProps: {
				alertType: 'success'
			}
		})
	}

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.topNav}>
				<Text style={styles.title}>Dua Categories</Text>
				<View style={styles.favHolder}>
					<TouchableOpacity
						style={styles.globe}
						onPress={() => changeLang('bn')}>
						<Text
							style={[
								styles.langText,
								language === 'bn'
									? { backgroundColor: 'lightseagreen', color: 'white' }
									: null
							]}>
							বাংলা
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.globe}
						onPress={() => changeLang('en')}>
						<Text
							style={[
								styles.langText,
								language === 'en'
									? { backgroundColor: 'lightseagreen', color: 'white' }
									: null
							]}>
							En
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.globe}
						onPress={() => {
							navigate('AllDuas')
						}}>
						<Icon name="globe" type="entypo" color="lightseagreen" size={18} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							navigate('Favourites')
						}}>
						<Icon name="heart" type="entypo" color="lightseagreen" size={22} />
					</TouchableOpacity>
				</View>
			</View>

			<FlatList
				data={Categories}
				keyExtractor={item => item.key}
				contentContainerStyle={styles.scrollContainer}
				numColumns={3}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.itemContainer}
						onPress={() =>
							navigate('Categories', {
								pageTitle: language === 'bn' ? item.name_bn : item.name_en,
								category: item.category
							})
						}>
						<Text
							style={[
								styles.itemName,
								{
									fontFamily:
										language === 'bn' ? 'SolaimanLipiNormal' : 'Menlo-Regular'
								}
							]}>
							{language === 'bn' ? item.name_bn : item.name_en}
						</Text>
					</TouchableOpacity>
				)}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: 'honeydew'
	},
	scrollContainer: {
		backgroundColor: 'honeydew',
		alignItems: 'center'
	},
	topNav: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: hp('2%'),
		paddingHorizontal: wp('5%')
	},
	favHolder: {
		flexDirection: 'row',
		marginRight: wp('2%'),
		alignItems: 'center'
	},
	globe: {
		marginRight: wp('2%')
	},
	title: {
		fontWeight: 'bold',
		color: '#1c1c1c',
		fontFamily: 'Menlo',
		fontSize: 22
	},
	itemContainer: {
		width: wp('28%'),
		height: hp('16%'),
		backgroundColor: '#343a40',
		borderRadius: wp('2%'),
		alignItems: 'center',
		paddingTop: hp('1%'),
		paddingHorizontal: wp('3%'),
		marginRight: wp('2%'),
		marginBottom: hp('2%')
	},
	itemName: {
		fontWeight: 'bold',
		color: 'white',
		fontSize: 17,
		marginTop: hp('3%'),
		flexWrap: 'wrap'
	},
	duaHolder: {
		width: wp('35%'),
		height: hp('10%'),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: wp('4%'),
		marginLeft: wp('3%'),
		marginTop: hp('1%')
	},
	spacer: {
		height: hp('3%')
	},
	row: {
		flexDirection: 'row',
		width: wp('100%'),
		marginTop: hp('3%'),
		alignItems: 'center'
	},
	spacerH: {
		width: wp('5%')
	},
	langText: {
		fontWeight: '500',
		color: 'gray',
		//fontFamily: 'SolaimanLipiNormal',
		fontSize: 14
	}
})
