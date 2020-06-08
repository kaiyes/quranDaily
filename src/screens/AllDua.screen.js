import React from "react"
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	ScrollView,
	SafeAreaView
} from "react-native"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { Icon } from "react-native-elements"

//utility
import Duas from "../utility/duas"

export default function AllDua({ route, navigation }) {
	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.backNav}>
				<TouchableOpacity
					onPress={() => {
						navigation.goBack()
					}}
				>
					<Icon name="arrow-bold-left" type="entypo" color="dimgray" />
				</TouchableOpacity>
				<Text style={styles.navHeader}>All Duas</Text>
			</View>

			<FlatList
				data={Duas}
				tabLabel="All Duas"
				keyExtractor={item => item.key}
				contentContainerStyle={styles.scrollContainer}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.item}
						onPress={function goToDetail() {
							navigation.navigate("DuaDetail", {
								pageTitle: item.pageTitle,
								duas: item.duas
							})
						}}
					>
						<View style={styles.circle}>
							<Text style={styles.number}>{item.id}</Text>
						</View>
						<Text style={styles.title}>{item.pageTitle}</Text>
					</TouchableOpacity>
				)}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "honeydew"
	},
	scrollContainer: {
		backgroundColor: "honeydew",
		alignItems: "center"
	},
	itemName: {
		fontWeight: "500",
		width: wp("30%"),
		flexWrap: "wrap",
		fontSize: hp("2%"),
		color: "white",
		fontFamily: "Menlo"
	},
	item: {
		width: wp("95%"),
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		padding: 12
	},
	circle: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: "lightgreen",
		marginRight: 10,
		justifyContent: "center",
		alignItems: "center"
	},
	spacer: {
		marginTop: hp("5%")
	},
	number: {
		fontWeight: "500",
		fontSize: hp("2%"),
		color: "darkolivegreen",
		fontFamily: "Menlo"
	},
	tabBarText: {
		fontWeight: "500",
		fontSize: hp("1.6%"),
		color: "darkolivegreen",
		fontFamily: "Menlo"
	},
	underline: {
		backgroundColor: "darkgreen"
	},
	title: {
		fontWeight: "400",
		fontSize: hp("2.1%"),
		color: "darkolivegreen",
		fontFamily: "Menlo",
		width: wp("80%")
	},
	backNav: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		width: wp("100%"),
		alignItems: "flex-start",
		paddingLeft: wp("3.5%"),
		paddingTop: hp("2%"),
		backgroundColor: "honeydew",
		borderBottomWidth: hp(".2%"),
		borderBottomColor: "whitesmoke"
	},
	navHeader: {
		fontWeight: "bold",
		fontSize: 22,
		color: "#383849",
		fontFamily: "Menlo",
		marginLeft: wp("30%"),
		marginBottom: hp("1%")
	}
})
