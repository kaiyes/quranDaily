import React from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

//utility
import DUA from "../utility/dua"
import "../assets/fonts/me_quran.ttf"

export default function DuaDetail({ route, navigation }) {
  const { title, dua, spelling, meaning, source } = route.params

  return (
    <View style={styles.rootView}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.dua}>{dua}</Text>
      <Text style={styles.spelling}>{spelling}</Text>
      <View style={styles.secondContainer}>
        <Text style={styles.meaning}>{meaning}</Text>
        <Text style={styles.source}>{source}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: "honeydew",
    height: hp("100%"),
    paddingTop: hp("5%"),
    alignItems: "center",
    paddingHorizontal: wp("3%")
  },
  secondContainer: { width: wp("90%") },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "darkolivegreen"
  },
  dua: {
    marginTop: hp("3%"),
    fontSize: 32,
    fontWeight: "300",
    textAlign: "right",
    fontFamily: "me_quran",
    color: "darkolivegreen"
  },
  spelling: {
    marginTop: hp("3%"),
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Menlo",
    color: "darkolivegreen"
  },
  meaning: {
    marginTop: hp("3%"),
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Menlo",
    color: "darkolivegreen"
  },
  source: {
    marginTop: hp("3%"),
    fontSize: 16,
    fontWeight: "200",
    fontFamily: "Menlo",
    color: "darkolivegreen"
  },
  playButton: {
    position: "absolute",
    right: wp("5%"),
    bottom: hp("3.5%"),
    width: wp("27%"),
    height: hp("20%")
  }
})
