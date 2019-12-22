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
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollContainer}
      >
        {Categories.map(item => (
          <TouchableOpacity
            key={item.key}
            style={[styles.itemContainer, { backgroundColor: item.color }]}
            onPress={function goToOwnScreen() {
              navigation.navigate("Dua")
            }}
          >
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "honeydew"
  },
  scrollContainer: {
    paddingLeft: wp("3%"),
    paddingTop: hp("3%")
  },
  itemName: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Menlo"
  },
  itemContainer: {
    width: wp("35%"),
    height: hp("30%"),
    alignItems: "center",
    borderRadius: wp("5%"),
    paddingTop: hp("2%"),
    marginRight: wp("4%")
  }
})
