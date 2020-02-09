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
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.header}>WelCome, Kaiyes</Text>
          <Text style={styles.headerSubtitle}>Let's have a sunnah day</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  scrollView: {
    backgroundColor: "white",
    paddingLeft: wp("5%"),
    paddingTop: hp("2%")
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
  }
})
