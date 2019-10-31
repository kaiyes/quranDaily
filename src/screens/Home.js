import React from "react"
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native"
import { FlatGrid } from "react-native-super-grid"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

const items = [
  { name: "Quran", code: "#1abc9c" },
  { name: "Dua", code: "#2ecc71" },
  { name: "Deeds", code: "#3498db" },
  { name: "Memorize", code: "#9b59b6" },
  { name: "Duo Lingo", code: "#34495e" },
  { name: "Live Quiz", code: "#16a085" },
  { name: "Qtor", code: "#2ecc71" },
  { name: "Arabic Bazar", code: "#3498db" },
  { name: "Mentors", code: "#1abc9c" },
  { name: "Mentors", code: "#1abc9c" }
]

function Home({ navigation }) {
  return (
    <FlatGrid
      itemDimension={120}
      items={items}
      contentContainerStyle={styles.root}
      spacing={10}
      renderItem={({ item, index }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: hp("3%"),
    color: "white"
  },
  itemContainer: {
    width: wp("40%"),
    height: hp("15%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp("1%")
  }
})

export default Home
