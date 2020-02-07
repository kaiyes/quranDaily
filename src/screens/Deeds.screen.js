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

//utility

export default function Deeds({ navigation }) {
  const [fajr, setFajr] = useState(false)
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.card}>
            <View
              style={[
                styles.leftCol,
                { backgroundColor: fajr ? "honeydew" : "white" }
              ]}
            >
              <CheckBox
                center
                iconType="feather"
                checkedIcon="check-circle"
                uncheckedIcon="circle"
                checkedColor="seagreen"
                uncheckedColor="tomato"
                size={35}
                checked={fajr}
                onPress={() => {
                  setFajr(!fajr)
                }}
              />
            </View>
            <View
              style={[
                styles.rightCol,
                { backgroundColor: fajr ? "honeydew" : "white" }
              ]}
            >
              <Text style={styles.taskTest}>Fajr</Text>
            </View>
          </View>
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
    backgroundColor: "white"
  },
  taskTest: {
    color: "darkslateblue",
    fontFamily: "Menlo",
    fontSize: hp("3%")
  },
  card: {
    flexDirection: "row",
    height: hp("10%"),
    borderBottomWidth: hp(".1%"),
    borderBottomColor: "darkgrey"
  },
  leftCol: {
    width: wp("30%"),
    justifyContent: "center",
    alignItems: "center"
  },
  rightCol: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})
