import React from "react"
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
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.card}>
            <View style={styles.leftCol}>
              <CheckBox
                center
                iconType="feather"
                checkedIcon="check-circle"
                uncheckedIcon="circle"
                checkedColor="seagreen"
                uncheckedColor="seagreen"
                size={40}
                checked={true}
              />
            </View>
            <View style={styles.rightCol}>
              <Text style={styles.taskTest}>Morning Prayer</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.leftCol}>
              <CheckBox
                center
                iconType="feather"
                checkedIcon="check-circle"
                uncheckedIcon="circle"
                checkedColor="seagreen"
                uncheckedColor="seagreen"
                size={40}
                checked={true}
              />
            </View>
            <View style={styles.rightCol}>
              <Text style={styles.taskTest}>Morning Prayer</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.leftCol}>
              <CheckBox
                center
                iconType="feather"
                checkedIcon="check-circle"
                uncheckedIcon="circle"
                checkedColor="seagreen"
                uncheckedColor="seagreen"
                size={40}
                checked={true}
              />
            </View>
            <View style={styles.rightCol}>
              <Text style={styles.taskTest}>Morning Prayer</Text>
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
    fontSize: hp("2.4%")
  },
  card: {
    flexDirection: "row",
    height: hp("10%"),
    borderBottomWidth: hp(".02%"),
    borderBottomColor: "darkgrey"
  },
  leftCol: {
    width: wp("30%"),
    backgroundColor: "whitesmoke",
    paddingLeft: wp("5%"),
    justifyContent: "center",
    alignItems: "center"
  },
  rightCol: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: wp("5%")
  }
})
