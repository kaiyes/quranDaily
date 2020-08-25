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
import Duas from '../utility/dua'

export default function AllDua({ route, navigation }) {
	function goToDetail(item) {
		navigation.navigate('DuaDetail', {
			pageTitle_en: item.pageTitle_en,
			pageTitle_bn: item.pageTitle_bn,
			duas: item.duas
		})
	}

	return (
		<SafeAreaView style={styles.root}>
			<FlatList
				data={Duas}
				keyExtractor={item => item.key}
				contentContainerStyle={styles.scrollContainer}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						style={styles.item}
						onPress={() => goToDetail(item)}>
						<View style={styles.circle}>
							<Text style={styles.number}>{index + 1}</Text>
						</View>
						<Text style={styles.title}>{item.pageTitle_en}</Text>
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
	itemName: {
		fontWeight: '500',
		width: wp('30%'),
		flexWrap: 'wrap',
		fontSize: hp('2%'),
		color: 'white',
		fontFamily: 'Menlo'
	},
	item: {
		width: wp('95%'),
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 12
	},
	circle: {
		height: 36,
		width: 36,
		borderRadius: 18,
		backgroundColor: 'lightgreen',
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	spacer: {
		marginTop: hp('5%')
	},
	number: {
		fontWeight: '500',
		fontSize: 14,
		color: 'darkolivegreen',
		fontFamily: 'Menlo'
	},
	tabBarText: {
		fontWeight: '500',
		fontSize: hp('1.6%'),
		color: 'darkolivegreen',
		fontFamily: 'Menlo'
	},
	underline: {
		backgroundColor: 'darkgreen'
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
		alignItems: 'center',
		width: wp('100%'),
		alignItems: 'flex-start',
		paddingLeft: wp('3.5%'),
		paddingTop: hp('2%'),
		backgroundColor: 'honeydew',
		borderBottomWidth: hp('.2%'),
		borderBottomColor: 'whitesmoke'
	},
	navHeader: {
		fontWeight: 'bold',
		fontSize: 22,
		color: '#383849',
		fontFamily: 'Menlo',
		marginLeft: wp('30%'),
		marginBottom: hp('1%')
	}
})
