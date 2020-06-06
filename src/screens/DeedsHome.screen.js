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
				<Icon
					reverse
					name={icon}
					type="feather"
					color="mediumaquamarine"
					size={25}
					reverseColor={"white"}
				/>

				<Text style={styles.cardHeader}>{topicName}</Text>
				<View style={styles.dotHolder}>
					{subTasks.map(task => (
						<TouchableOpacity key={Math.random()}>
							<Icon
								reverse
								name={icon}
								type="feather"
								color="gold"
								size={15}
								reverseColor={"#242126"}
							/>
						</TouchableOpacity>
					))}
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
		backgroundColor: "white",
		width: wp("42.5%"),
		borderRadius: wp("2%"),
		alignItems: "center",
		paddingTop: hp("1.5%"),
		marginBottom: hp("3%"),
		marginHorizontal: wp("2.5%"),
		paddingHorizontal: wp("2.5%"),
		paddingBottom: hp("1.5%"),
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.37,
		shadowRadius: 4,
		elevation: 4
	},
	cardHeader: {
		fontWeight: "400",
		color: "#242126",
		fontFamily: "Menlo",
		fontSize: 22,
		marginVertical: hp("1%"),
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
	},
	dotHolder: {
		flexDirection: "row",
		flexWrap: "wrap"
	}
})
