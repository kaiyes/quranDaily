import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { Icon } from "react-native-elements"

//utility

export default function Deeds({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.heading}>Morning Prayer</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  scrollView: {
    backgroundColor: "white",
    paddingLeft: wp("5%"),
    paddingTop: hp("2%")
  },
  heading: {
    fontWeight: "bold",
    color: "darkslateblue",
    fontFamily: "Menlo",
    fontSize: hp("2%")
  },
  calenderIcon: {
    alignItems: "flex-end",
    marginRight: wp("5%")
  }
})

// <TouchableOpacity
//   onPress={() => {
//     navigation.navigate("Calendar")
//   }}
// >
//   <Icon
//     name="calendar"
//     type="entypo"
//     color="seagreen"
//     containerStyle={styles.calenderIcon}
//   />
// </TouchableOpacity>
//
