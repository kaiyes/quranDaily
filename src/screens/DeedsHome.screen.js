import React, { useState } from "react"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  SectionList
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { Icon, CheckBox } from "react-native-elements"
import { format, subDays } from "date-fns"
import { Calendar, CalendarList, Agenda } from "react-native-calendars"

//utility

export default function Deeds({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.header}>WelCome, Kaiyes</Text>
      <Text style={styles.headerSubtitle}>Let's have a sunnah day</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("Deeds", {
              topic: "prayer"
            })
          }}
        >
          <Icon reverse name="book" type="feather" color="lightseagreen" />
          <Text style={styles.cardHeader}>Fard Salah</Text>
          <View style={styles.dotHolder}>
            <View style={[styles.dot, { backgroundColor: "tomato" }]} />
            <View style={[styles.dot, { backgroundColor: "goldenrod" }]} />
          </View>
        </TouchableOpacity>
        <View style={styles.spacerH} />
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("Deeds", {
              topic: "quran"
            })
          }}
        >
          <Icon reverse name="book" type="feather" color="lightseagreen" />
          <Text style={styles.cardHeader}>Quran</Text>
          <View style={styles.dotHolder}>
            <View style={[styles.dot, { backgroundColor: "tomato" }]} />
            <View style={[styles.dot, { backgroundColor: "seagreen" }]} />
            <View style={[styles.dot, { backgroundColor: "goldenrod" }]} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("Deeds", {
              topic: "sunnahSalah"
            })
          }}
        >
          <Icon reverse name="book" type="feather" color="lightseagreen" />
          <Text style={styles.cardHeader}>Sunnah Salah</Text>
          <View style={styles.dotHolder}>
            <View style={[styles.dot, { backgroundColor: "tomato" }]} />
          </View>
        </TouchableOpacity>
        <View style={styles.spacerH} />
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("Deeds", {
              topic: "sunnahSalah"
            })
          }}
        >
          <Icon reverse name="book" type="feather" color="lightseagreen" />
          <Text style={styles.cardHeader}>Sunnah Salah</Text>
          <View style={styles.dotHolder}>
            <View style={[styles.dot, { backgroundColor: "tomato" }]} />
          </View>
        </TouchableOpacity>
        <View style={styles.spacerH} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: wp("5%"),
    paddingTop: hp("5%")
  },
  header: {
    fontWeight: "400",
    color: "black",
    fontFamily: "Menlo",
    fontSize: hp("4%")
  },
  headerSubtitle: {
    fontWeight: "400",
    color: "gray",
    fontFamily: "Menlo",
    fontSize: hp("2.5%")
  },
  row: {
    flexDirection: "row",
    width: wp("100%"),
    marginTop: hp("3%")
  },
  card: {
    backgroundColor: "white",
    width: wp("42.5%"),
    height: hp("25%"),
    borderRadius: wp("2%"),
    alignItems: "center",
    paddingTop: hp("2%")
  },
  spacerH: {
    width: wp("5%")
  },
  cardHeader: {
    fontWeight: "400",
    color: "dimgray",
    fontFamily: "Menlo",
    fontSize: hp("2.5%"),
    marginTop: hp("4%")
  },
  dotHolder: {
    flexDirection: "row",
    marginTop: hp("1%")
  },
  dot: {
    width: hp("2%"),
    height: hp("2%"),
    borderRadius: hp("1%"),
    marginHorizontal: wp(".5%")
  }
})
