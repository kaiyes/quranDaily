import React from "react"
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList
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
  { name: "Live Quiz", code: "tomato", detail: "liveQuiz" },
  { name: "Quran tutor", code: "palegreen", detail: "qTor" },
  { name: "Janaza", code: "#9b59b6", detail: "janaza" }
]

function Home({ navigation }) {
  return (
    <View style={styles.container}>
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
              navigation.navigate(`${item.detail}`)
            }}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  topContainer: {
    height: hp("46%")
  },
  text: {
    fontWeight: "bold",
    fontSize: hp("2.4%"),
    color: "white"
  },
  itemContainer: {
    width: wp("35%"),
    height: hp("15%"),
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Home

// <FlatGrid
//   itemDimension={120}
//   items={items}
//   contentContainerStyle={styles.root}
//   spacing={10}
//   scrollEnabled={false}
//   renderItem={({ item, index }) => (
//     <TouchableOpacity
//       style={[styles.itemContainer, { backgroundColor: item.code }]}
//       onPress={function goToOwnScreen() {
//         navigation.navigate(`${item.detail}`)
//       }}
//     >
//       <Text style={styles.text}>{item.name}</Text>
//     </TouchableOpacity>
//   )}
// />
