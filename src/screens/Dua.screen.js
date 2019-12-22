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
    <SafeAreaView>
      <Text style={styles.title}>Categorised</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {Categories.map(item => (
          <TouchableOpacity
            key={item.key}
            style={[styles.itemContainer, { backgroundColor: item.color }]}
            onPress={function goToOwnScreen() {
              navigation.navigate("Categories")
            }}
          >
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.title}> All Duas </Text>
      <TouchableOpacity
        style={[styles.duaHolder, { backgroundColor: "steelblue" }]}
        onPress={function goToOwnScreen() {
          navigation.navigate("AllDuas")
        }}
      >
        <Text style={styles.itemName}>দুয়া সমগ্র</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />

      <Text style={styles.title}> Favourites</Text>
      <TouchableOpacity
        style={[styles.duaHolder, { backgroundColor: "goldenrod" }]}
        onPress={function goToOwnScreen() {
          navigation.navigate("Favourites")
        }}
      >
        <Text style={styles.itemName}>favourites</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingLeft: wp("3%"),
    paddingTop: hp("1%"),
    marginBottom: hp("3%")
  },
  itemName: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Menlo",
    fontSize: hp("2%"),
    width: wp("30%"),
    textAlign: "center"
  },
  itemContainer: {
    width: wp("35%"),
    height: hp("30%"),
    alignItems: "center",
    borderRadius: wp("5%"),
    paddingTop: hp("2%"),
    marginRight: wp("4%")
  },
  title: {
    fontWeight: "bold",
    color: "navy",
    fontFamily: "Menlo",
    fontSize: hp("2.5%"),
    marginTop: hp("2%"),
    marginLeft: wp("3%")
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
  }
})
