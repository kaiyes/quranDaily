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
import Duas from "../utility/duas"
import "../assets/fonts/me_quran.ttf"

export default function AllDua({ route, navigation }) {
  return (
    <View style={styles.rootView}>
      <FlatList
        data={Duas}
        keyExtractor={item => item.duas[0]._id}
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
              <Text style={styles.number}>{item.duas[0]._id}</Text>
            </View>
            <Text style={styles.title}>{item.pageTitle}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "honeydew"
  },
  topContainer: {
    marginTop: hp("60%")
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
    width: wp("80%")
  }
})
