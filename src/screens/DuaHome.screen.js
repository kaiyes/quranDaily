import React from "react"
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import ScrollableTabView from "react-native-scrollable-tab-view"
//Utility
import DUA from "../utility/duas"
import Categories from "../utility/categories"

export default function Dua({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      styles={styles.scrollView}
    >
      <Text style={styles.title}>Duas</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.itemContainer, { backgroundColor: "darkslateblue" }]}
          onPress={function goToOwnScreen() {
            navigation.navigate("Categories", {
              pageTitle: "কুরআনের দোয়া",
              category: "quran"
            })
          }}
        >
          <Text style={styles.itemName}>Quran</Text>
        </TouchableOpacity>
        <View style={styles.spacerH} />
        <TouchableOpacity
          style={[styles.itemContainer, { backgroundColor: "indianred" }]}
          onPress={function goToOwnScreen() {
            navigation.navigate("Categories", {
              pageTitle: "something",
              category: "something"
            })
          }}
        >
          <Text style={styles.itemName}>Quran</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingLeft: wp("5%"),
    paddingTop: hp("1%"),
    backgroundColor: "honeydew"
  },
  scrollView: {
    flex: 1,
    backgroundColor: "honeydew"
  },
  title: {
    fontWeight: "bold",
    color: "dimgray",
    fontFamily: "Menlo",
    fontSize: hp("4%"),
    marginTop: hp("4%")
  },
  itemName: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Menlo",
    fontSize: hp("3.5%"),
    marginTop: hp("4%")
  },
  itemContainer: {
    width: wp("42.5%"),
    height: hp("25%"),
    borderRadius: wp("2%"),
    alignItems: "center",
    paddingTop: hp("2%")
  },
  duaHolder: {
    width: wp("35%"),
    height: hp("10%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp("4%"),
    marginLeft: wp("3%"),
    marginTop: hp("1%")
  },
  spacer: {
    height: hp("3%")
  },
  row: {
    flexDirection: "row",
    width: wp("100%"),
    marginTop: hp("3%"),
    alignItems: "center"
  },
  spacerH: {
    width: wp("5%")
  }
})
