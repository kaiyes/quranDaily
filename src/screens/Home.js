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
  { name: "Quran", code: "#1abc9c", detail: "quran" },
  { name: "Dua", code: "#2ecc71", detail: "dua" },
  { name: "Deeds", code: "#3498db", detail: "deeds" },
  { name: "Memorize", code: "#9b59b6", detail: "memorize" },
  { name: "Learn Arabic", code: "#34495e", detail: "learnArabic" },
  { name: "Live Quiz", code: "#16a085", detail: "liveQuiz" },
  { name: "Quran tutor", code: "#2ecc71", detail: "qTor" },
  { name: "Arabic Bazar", code: "#3498db", detail: "arabicBazar" },
  { name: "Mentors", code: "#1abc9c", detail: "mentors" },
  { name: "Kitabs", code: "#f39c12", detail: "kitabs" }
]

function Home({ navigation }) {
  return (
    <FlatGrid
      itemDimension={120}
      items={items}
      contentContainerStyle={styles.root}
      spacing={10}
      scrollEnabled={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[styles.itemContainer, { backgroundColor: item.code }]}
          onPress={function goToOwnScreen() {
            navigation.navigate(`${item.detail}`)
          }}
        >
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
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
    width: wp("46%"),
    height: hp("15%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp("1%")
  }
})

export default Home
