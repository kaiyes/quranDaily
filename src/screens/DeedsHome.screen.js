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
	function renderItem({ item: { icon, status, topicName, topic, subTasks } }) {
		return (
			<View style={styles.card}>
				<View style={styles.topRow}>
					<Icon
						reverse
						name={icon}
						type="feather"
						color="white"
						size={25}
						reverseColor={"black"}
						containerStyle={styles.icon}
					/>
				</View>
				<View style={styles.bottomRow}>
					<Text style={styles.cardHeader}>{topicName}</Text>
					<View style={styles.dotHolder}>
						{subTasks.map(task => (
							<TouchableOpacity key={Math.random()}>
								<Icon
									reverse
									name={icon}
									type="feather"
									color="gold"
									size={13}
									reverseColor={"#242126"}
								/>
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
		backgroundColor: "tomato",
		width: wp("42.5%"),
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
		fontFamily: "Menlo",
		fontWeight: "500",
		fontStyle: "italic",
		color: "white",
		fontSize: 18,
		marginVertical: hp("1.5%")
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
	topRow: {
		height: hp("12%"),
		justifyContent: "center",
		alignItems: "center"
	},
	bottomRow: {
		flex: 1,
		width: wp("42.5%"),
		backgroundColor: "black",
		alignItems: "center",
		paddingHorizontal: wp("3.5%"),
		paddingBottom: hp("1.5%"),
		borderBottomLeftRadius: wp("2%"),
		borderBottomRightRadius: wp("2%")
	},
	dotHolder: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center"
	},
	icon: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 12
	}
})
