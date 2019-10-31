import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native"

export default function Memorize() {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={styles.root}>
        <Text style={styles.text}>Memorize</Text>
      </View>
    </>
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
    fontWeight: "bold"
  }
})
