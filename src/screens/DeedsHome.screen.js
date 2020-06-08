import React, { useState } from "react"
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image
} from "react-native"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { Icon } from "react-native-elements"
import { Bar } from "react-native-progress"

import FakeData from "../utility/fakeData"

export default function Deeds({ navigation }) {
	function renderItem({ item: { status, topicName, topic, subTasks, image } }) {
		return (
			<View style={styles.card}>
				<View style={styles.topRow}>
					<Image source={image} style={styles.image} />
				</View>
				<View style={styles.bottomRow}>
					<Text style={styles.cardHeader}>{topicName}</Text>
					<View style={styles.dotHolder}>
						{subTasks.map(task => (
							<TouchableOpacity key={Math.random()}>
								<Image source={task.icon} style={styles.taskIcon} />
							</TouchableOpacity>
						))}
					</View>
				</View>
			</View>
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
				ListFooterComponent={() => <View style={styles.footer} />}
				renderItem={item => renderItem(item)}
			/>
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
		fontSize: 22,
		marginLeft: wp("5%"),
		marginTop: hp("1%")
	},
	headerSubtitle: {
		fontWeight: "400",
		color: "gray",
		fontFamily: "Menlo",
		fontSize: 17,
		marginLeft: wp("5%")
	},
	flatList: {
		width: wp("100%"),
		marginTop: hp("3%"),
		alignItems: "center"
	},
	card: {
		backgroundColor: "tomato",
		width: wp("42.5%"),
		borderRadius: wp("2%"),
		alignItems: "center",
		marginBottom: hp("3%"),
		marginHorizontal: wp("2.5%"),
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.37,
		shadowRadius: 4,
		elevation: 4
	},
	cardHeader: {
		fontFamily: "Menlo",
		fontWeight: "500",
		color: "white",
		fontSize: 17,
		marginVertical: hp("1.5%")
	},
	topRow: {
		height: hp("12%"),
		justifyContent: "center",
		alignItems: "center"
	},
	bottomRow: {
		flex: 1,
		width: wp("42.5%"),
		backgroundColor: "#343a40",
		alignItems: "center",
		paddingHorizontal: wp("2%"),
		paddingBottom: hp("1.5%"),
		borderBottomLeftRadius: wp("2%"),
		borderBottomRightRadius: wp("2%")
	},
	dotHolder: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center"
	},
	plusIcon: {
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		position: "absolute",
		bottom: 0,
		right: 0
	},
	icon: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 12
	},
	image: {
		flex: 1,
		width: wp("42.5%"),
		borderTopLeftRadius: wp("2%"),
		borderTopRightRadius: wp("2%")
	},
	taskIcon: {
		width: wp("10%"),
		height: wp("10%"),
		borderRadius: wp("5%"),
		marginRight: wp("2%")
	},
	footer: {
		height: wp("3%")
	}
})
