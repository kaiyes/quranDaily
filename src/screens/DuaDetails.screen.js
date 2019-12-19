import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native"

export default function DuaDetails() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.scrollView}>
        <Text style={styles.sectionTitle}> Dua Details </Text>
      </SafeAreaView>
    </>
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
