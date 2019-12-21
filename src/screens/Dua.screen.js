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

function uniqueId() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

const items = [
  { name: "কুরআনের দোয়া", code: "mediumaquamarine", detail: "quran" },
  { name: "সকাল-সন্ধ্যায়", code: "mediumseagreen", detail: "morning" },
  { name: "যাত্রা পথে", code: "forestgreen", detail: "travelling" },
  { name: "সালাতের দোয়া", code: "green", detail: "salah" },
  { name: "তাওবা", code: "darkgreen", detail: "তাওবা" },
  { name: "ইস্তেখারার দোয়া ", code: "darkolivegreen", detail: "istekhara" },
  { name: "অসুস্থতার দোয়া ", code: "olivedrab", detail: "quran" },
  { name: "শিশুদের নিরাপত্তা", code: "olive", detail: "morning" },
  { name: "রুকিয়ার দোয়া", code: "darkkhaki", detail: "ruqiah" },
  { name: "বিয়ে সঙ্ক্রান্ত", code: "mediumaquamarine", detail: "marriage" },
  { name: "আর্থিক", code: "mediumseagreen", detail: "money" },
  { name: "জানাযা", code: "forestgreen", detail: "janaza" },
  { name: "অতিথির জন্যে", code: "green", detail: "mehman" },
  { name: "রামাদানের দোয়া", code: "darkgreen", detail: "ramadan" },
  { name: "হজ্বের দোয়া", code: "darkolivegreen", detail: "hajj" }
]

items.map(item => {
  return (item.key = uniqueId())
})

export default function Dua({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollableTabView
        tabBarTextStyle={styles.tabBarText}
        tabBarUnderlineStyle={styles.underline}
      >
        <View tabLabel="Categorised" style={styles.topContainer}>
          <FlatList
            data={items}
            numColumns={3}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.code}
                style={[styles.itemContainer, { backgroundColor: item.code }]}
                onPress={function goToOwnScreen() {
                  navigation.navigate("Dua")
                }}
              >
                <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <FlatList
          data={DUA}
          tabLabel="All Duas"
          keyExtractor={item => item.key}
          contentContainerStyle={styles.flatList}
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
        <ScrollView tabLabel="Favourites" />
      </ScrollableTabView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "honeydew",
    justifyContent: "center",
    alignItems: "center"
  },
  topContainer: {
    position: "absolute",
    bottom: 0
  },
  itemName: {
    fontWeight: "500",
    width: wp("30%"),
    flexWrap: "wrap",
    fontSize: hp("2%"),
    color: "white",
    fontFamily: "Menlo"
  },
  itemContainer: {
    width: wp("35%"),
    height: hp("15%"),
    justifyContent: "center",
    alignItems: "center"
  },
  duaContainer: {
    backgroundColor: "honeydew",
    flex: 1
  },
  flatList: {
    backgroundColor: "honeydew"
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
    width: wp("75%")
  }
})
