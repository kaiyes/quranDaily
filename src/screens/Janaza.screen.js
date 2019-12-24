import React, { useState } from "react"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native"
import MapView, { Marker } from "react-native-maps"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

export default function Janaza() {
  const [region, setRegion] = useState({
    latitude: 23.8211,
    longitude: 90.3704,
    latitudeDelta: 1,
    longitudeDelta: 1
  })
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 23.8211,
        longitude: 90.3704,
        latitudeDelta: 1,
        longitudeDelta: 1
      }}
      showsUserLocation={true}
      minZoomLevel={10}
    >
      <Marker coordinate={region} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: hp("100%"),
    width: wp("100%")
  }
})
