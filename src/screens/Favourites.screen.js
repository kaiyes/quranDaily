import React, { useState, useEffect, useContext } from 'react'
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	ScrollView
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'
//utility
import '../assets/fonts/me_quran.ttf'
import Loader from '../components/loader'

import { DataStore } from '@aws-amplify/datastore'
import { Duas } from '../models'
import LanguageContext from '../utility/context'

export default function Favourites({ route, navigation: { navigate } }) {
	const [loading, setLoading] = useState(false)
	const [duas, setDuas] = useState([])

	const { language, setLanguage } = useContext(LanguageContext)

	useEffect(() => {
		;(async function fetchData() {
			setLoading(true)
			const duas = await DataStore.query(Duas)
			setDuas(duas)
			setLoading(false)
		})()
	}, [])

	return (
		<View style={styles.container}>
			{loading
				? Loader()
				: duas.map(item => (
						<TouchableOpacity
							key={Math.random().toString()}
							style={styles.basicRow}
							onPress={() =>
								navigate('BookmarkedDua', {
									duas: item.duas,
									pageTitle_en: item.pageTitle_en,
									pageTitle_bn: item.pageTitle_bn
								})
							}>
							<Icon
								type={'feather'}
								name={'bookmark'}
								size={22}
								containerStyle={styles.icon}
							/>
							<Text style={styles.title}>
								{language === 'bn' ? item.pageTitle_bn : item.pageTitle_en}
							</Text>
						</TouchableOpacity>
				  ))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'honeydew',
		paddingTop: hp('2%'),
		paddingHorizontal: wp('3%')
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'darkolivegreen',
		textAlign: 'left',
		fontFamily: 'SolaimanLipiNormal',
		width: wp('75%')
	},
	basicRow: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		paddingVertical: hp('2%'),
		borderBottomWidth: 1,
		borderBottomColor: 'silver'
	},
	icon: {
		marginRight: wp('2%'),
		marginTop: hp('.5%')
	}
})
