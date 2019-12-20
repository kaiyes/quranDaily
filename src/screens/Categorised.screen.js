import React from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

//utility
import DUA from "../utility/dua"
import "../assets/fonts/me_quran.ttf"

export default function Categorised({ route, navigation }) {
  return (
    <FlatList
      data={DUA}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            navigation.navigate("Dua", {
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
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatList}
    />
  )
}

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: "honeydew",
    height: hp("100%"),
    paddingTop: hp("5%"),
    paddingHorizontal: wp("3%")
  },
  secondContainer: { width: wp("90%") },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "darkolivegreen",
    textAlign: "center"
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