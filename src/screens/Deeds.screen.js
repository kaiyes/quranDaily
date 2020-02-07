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
  const [dhuhr, setDhuhr] = useState(false)
  const [asr, setAsr] = useState(false)
  const [magrib, setMagrib] = useState(false)
  const [isha, setIsha] = useState(false)
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.taskHeader}>Daily Prayer</Text>
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
                uncheckedColor="crimson"
                size={30}
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
              <Text style={styles.taskText}>Fajr</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View
              style={[
                styles.leftCol,
                { backgroundColor: dhuhr ? "honeydew" : "white" }
              ]}
            >
              <CheckBox
                center
                iconType="feather"
                checkedIcon="check-circle"
                uncheckedIcon="circle"
                checkedColor="seagreen"
                uncheckedColor="crimson"
                size={30}
                checked={dhuhr}
                onPress={() => {
                  setDhuhr(!dhuhr)
                }}
              />
            </View>
            <View
              style={[
                styles.rightCol,
                { backgroundColor: dhuhr ? "honeydew" : "white" }
              ]}
            >
              <Text style={styles.taskText}>Dhuhr</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View
              style={[
                styles.leftCol,
                { backgroundColor: asr ? "honeydew" : "white" }
              ]}
            >
              <CheckBox
                center
                iconType="feather"
                checkedIcon="check-circle"
                uncheckedIcon="circle"
                checkedColor="seagreen"
                uncheckedColor="crimson"
                size={30}
                checked={asr}
                onPress={() => {
                  setAsr(!asr)
                }}
              />
            </View>
            <View
              style={[
                styles.rightCol,
                { backgroundColor: asr ? "honeydew" : "white" }
              ]}
            >
              <Text style={styles.taskText}>Asr</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View
              style={[
                styles.leftCol,
                { backgroundColor: magrib ? "honeydew" : "white" }
              ]}
            >
              <CheckBox
                center
                iconType="feather"
                checkedIcon="check-circle"
                uncheckedIcon="circle"
                checkedColor="seagreen"
                uncheckedColor="crimson"
                size={30}
                checked={magrib}
                onPress={() => {
                  setMagrib(!magrib)
                }}
              />
            </View>
            <View
              style={[
                styles.rightCol,
                { backgroundColor: magrib ? "honeydew" : "white" }
              ]}
            >
              <Text style={styles.taskText}>Magrib</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View
              style={[
                styles.leftCol,
                { backgroundColor: isha ? "honeydew" : "white" }
              ]}
            >
              <CheckBox
                center
                iconType="feather"
                checkedIcon="check-circle"
                uncheckedIcon="circle"
                checkedColor="seagreen"
                uncheckedColor="crimson"
                size={30}
                checked={isha}
                onPress={() => {
                  setIsha(!isha)
                }}
              />
            </View>
            <View
              style={[
                styles.rightCol,
                { backgroundColor: isha ? "honeydew" : "white" }
              ]}
            >
              <Text style={styles.taskText}>Isha</Text>
            </View>
          </View>
          <Text style={styles.taskHeader}>Morning Dua</Text>
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
  taskHeader: {
    fontWeight: "400",
    color: "seagreen",
    fontFamily: "Menlo",
    fontSize: hp("3.5%"),
    marginLeft: wp("20%"),
    marginTop: hp("2%"),
    textDecorationLine: "underline"
  },
  taskText: {
    color: "dimgray",
    fontFamily: "Menlo",
    fontSize: hp("3%")
  },
  card: {
    flexDirection: "row",
    height: hp("10%")
    // borderBottomWidth: hp(".1%"),
    // borderBottomColor: "darkgrey"
  },
  leftCol: {
    width: wp("20%"),
    justifyContent: "center",
    alignItems: "center"
  },
  rightCol: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1
  }
})
