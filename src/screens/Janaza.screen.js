import React, { useState } from "react"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native"
import MapView from "react-native-maps"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

export default function Janaza() {
  // const [region, setRegion] = useState({
  //   latitude: 37.78825,
  //   longitude: -122.4324,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421
  // })
  return (
    <MapView
      style={{ height: hp("100%"), width: wp("100%") }}
      initialRegion={{
        latitude: 23.7916,
        longitude: 90.4152,
        latitudeDelta: 1,
        longitudeDelta: 1
      }}
      showsUserLocation={true}
    />
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  }
})
