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
import DUA from "../utility/dua"

const items = [
  { name: "Dua from Quran", code: "#2ecc71", detail: "Dua from Quran" },
  { name: "Dua for Morning & Evening", code: "#3498db", detail: "deeds" },
  { name: "Dua for Travelling", code: "#9b59b6", detail: "janaza" }
]

export default function Dua({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollableTabView>
        <ScrollView tabLabel="All Dua">
          <View style={styles.topContainer} />
          <FlatList
            tabLabel="Explore"
            data={items}
            numColumns={3}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.code}
                style={[styles.itemContainer, { backgroundColor: item.code }]}
                onPress={function goToOwnScreen() {
                  navigation.navigate("Details")
                }}
              >
                <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
        <FlatList
          data={DUA}
          tabLabel="Categorised"
          ListHeaderComponent={<View style={styles.spacer} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                navigation.navigate("details", {
                  title: item.title,
                  dua: item.dua,
                  spelling: item.spelling,
                  meaning: item.meaning,
                  source: item.source,
                  audio: item.audio
                })
              }}
            >
              <View style={styles.circle}>
                <Text style={styles.textContainer}>{item.id}</Text>
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatList}
        />
        <ScrollView tabLabel="Favourite" />
      </ScrollableTabView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF5DC",
    justifyContent: "center",
    alignItems: "center"
  },
  topContainer: {
    height: hp("66%")
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
    backgroundColor: "#FEF5DC",
    flex: 1
  },
  flatList: {
    backgroundColor: "#FEF5DC"
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
    backgroundColor: "#F8B566",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 18
  },
  spacer: {
    marginTop: hp("5%")
  }
})
