import React, { useState } from "react"
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	FlatList,
	TouchableOpacity
} from "react-native"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { Icon, CheckBox } from "react-native-elements"
import { format, subDays } from "date-fns"

export default function Deeds({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>WelCome, Kaiyes</Text>
			<Text style={styles.headerSubtitle}>Let's have a sunnah day</Text>

			<View style={styles.row}>
				<TouchableOpacity
					style={styles.card}
					onPress={() => {
						navigation.navigate("Deeds", {
							topic: "prayer"
						})
					}}
				>
					<Icon reverse name="moon" type="feather" color="lightseagreen" />
					<Text style={styles.cardHeader}>Fard Salah</Text>
					<View style={styles.dotHolder}>
						<View style={[styles.dot, { backgroundColor: "tomato" }]} />
						<View style={[styles.dot, { backgroundColor: "goldenrod" }]} />
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "honeydew"
	},
	header: {
		fontWeight: "400",
		color: "black",
		fontFamily: "Menlo",
		fontSize: 34,
		marginLeft: wp("5%"),
		marginTop: hp("1%")
	},
	headerSubtitle: {
		fontWeight: "400",
		color: "gray",
		fontFamily: "Menlo",
		fontSize: 22,
		marginLeft: wp("5%")
	},
	row: {
		flexDirection: "row",
		width: wp("100%"),
		marginTop: hp("3%"),
		alignItems: "center",
		marginLeft: wp("5%")
	},
	card: {
		backgroundColor: "white",
		width: wp("42.5%"),
		height: hp("25%"),
		borderRadius: wp("2%"),
		alignItems: "center",
		paddingTop: hp("2%"),
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.37,
		shadowRadius: 4,
		elevation: 4
	},
	spacerH: {
		width: wp("5%")
	},
	cardHeader: {
		fontWeight: "400",
		color: "dimgray",
		fontFamily: "Menlo",
		fontSize: hp("2.5%"),
		marginTop: hp("4%")
	},
	dotHolder: {
		flexDirection: "row",
		marginTop: hp("1%")
	},
	dot: {
		width: hp("2%"),
		height: hp("2%"),
		borderRadius: hp("1%"),
		marginHorizontal: wp(".5%")
	},
	plusIcon: {
		width: wp("45%"),
		justifyContent: "center",
		alignItems: "center"
	}
})
// <TouchableOpacity style={styles.plusIcon}>
// 	<Icon reverse name="plus" type="feather" color="seagreen" />
// </TouchableOpacity>
