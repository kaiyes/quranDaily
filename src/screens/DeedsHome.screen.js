import React, { useState } from "react"
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	FlatList,
	TouchableOpacity
} from "react-native"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { Icon } from "react-native-elements"
import { Bar } from "react-native-progress"

import FakeData from "../utility/fakeData"

export default function Deeds({ navigation }) {
	function renderItem({ item: { icon, status, topicName, topic } }) {
		return (
			<TouchableOpacity
				style={styles.card}
				onPress={() => {
					console.log(icon)
				}}
			>
				<Icon
					reverse
					name={icon}
					type="feather"
					color="lightseagreen"
					size={32}
					reverseColor={"white"}
				/>

				<Text style={styles.cardHeader}>{topicName}</Text>
				<Bar
					progress={status / 100}
					width={wp("25%")}
					color={"lightseagreen"}
				/>
			</TouchableOpacity>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>WelCome, Kaiyes</Text>
			<Text style={styles.headerSubtitle}>Let's have a sunnah day</Text>

			<FlatList
				data={FakeData}
				keyExtractor={item => item.topicName}
				contentContainerStyle={styles.flatList}
				numColumns={2}
				renderItem={item => renderItem(item)}
			/>
			<View style={styles.button}>
				<TouchableOpacity style={styles.plusIcon}>
					<Icon reverse name="plus" type="feather" color="salmon" />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
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
	flatList: {
		width: wp("100%"),
		marginTop: hp("3%"),
		alignItems: "center"
	},
	card: {
		backgroundColor: "white",
		width: wp("42.5%"),
		height: hp("20%"),
		borderRadius: wp("2%"),
		alignItems: "center",
		paddingTop: hp("1.5%"),
		marginBottom: hp("3%"),
		marginHorizontal: wp("2.5%"),
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.37,
		shadowRadius: 4,
		elevation: 4
	},
	cardHeader: {
		fontWeight: "400",
		color: "dimgray",
		fontFamily: "Menlo",
		fontSize: 22,
		marginVertical: hp("1.5%"),
		marginHorizontal: wp("2%")
	},
	plusIcon: {
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		position: "absolute",
		bottom: 0,
		right: 0
	}
})
