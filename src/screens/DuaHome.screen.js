import React from 'react'
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
import ScrollableTabView from 'react-native-scrollable-tab-view'
//Utility
import DUA from '../utility/duas'
import Categories from '../utility/categories'

export default function Dua({ navigation }) {
	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.topNav}>
				<Text style={styles.title}>Dua Groups</Text>
				<View style={styles.favHolder}>
					<TouchableOpacity
						style={styles.globe}
						onPress={() => {
							navigation.navigate('AllDuas')
						}}>
						<Icon name="globe" type="entypo" color="lightseagreen" size={22} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('Favourites')
						}}>
						<Icon name="heart" type="entypo" color="lightseagreen" size={22} />
					</TouchableOpacity>
				</View>
			</View>

			<FlatList
				data={Categories}
				keyExtractor={item => item.key}
				contentContainerStyle={styles.scrollContainer}
				numColumns={2}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={[styles.itemContainer, { backgroundColor: item.color }]}
						onPress={function goToOwnScreen() {
							navigation.navigate('Categories', {
								pageTitle: item.pageTitle,
								category: item.category
							})
						}}>
						<Text style={styles.itemName}>{item.name}</Text>
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
		marginRight: wp('2%')
	},
	globe: {
		marginRight: wp('2%')
	},
	title: {
		fontWeight: 'bold',
		color: '#1c1c1c',
		fontFamily: 'Menlo',
		fontSize: 24
	},
	itemContainer: {
		width: wp('42.5%'),
		height: hp('25%'),
		borderRadius: wp('2%'),
		alignItems: 'center',
		paddingTop: hp('1%'),
		paddingHorizontal: wp('3%'),
		marginRight: wp('3%'),
		marginBottom: hp('2%')
	},
	itemName: {
		fontWeight: '500',
		color: 'white',
		fontFamily: 'Menlo',
		fontSize: 22,
		marginTop: hp('3%')
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
	}
})
