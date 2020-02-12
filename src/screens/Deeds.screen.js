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
import { format, formatDistance, formatRelative, subDays } from "date-fns"

//utility

export default function Deeds({ route, navigation }) {
  const [fajr, setFajr] = useState(false)
  const [dhuhr, setDhuhr] = useState(false)
  const [asr, setAsr] = useState(false)
  const [magrib, setMagrib] = useState(false)
  const [isha, setIsha] = useState(false)
  const [morning, setMorning] = useState(false)
  const [quran, setQuran] = useState(false)

  const [week, setWeek] = useState([
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "ThursDay"
  ])

  const { topic } = route.params

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.backNav}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Icon name="arrow-bold-left" type="entypo" color="dimgray" />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.days}
          >
            {week.map(item => (
              <View
                style={
                  format(new Date(), "iiii") === "item"
                    ? styles.today
                    : [styles.today, { backgroundColor: "lavender" }]
                }
              >
                <Text style={[styles.date, { color: "dimgray" }]}>{item}</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.taskHeader}>Daily Tasks</Text>
          {topic === "prayer" ? (
            <>
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
            </>
          ) : topic === "quran" ? (
            <>
              <View style={styles.card}>
                <View
                  style={[
                    styles.leftCol,
                    { backgroundColor: quran ? "honeydew" : "white" }
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
                    checked={quran}
                    onPress={() => {
                      setQuran(!quran)
                    }}
                  />
                </View>
                <View
                  style={[
                    styles.rightCol,
                    { backgroundColor: quran ? "honeydew" : "white" }
                  ]}
                >
                  <Text style={styles.taskText}>100 ayas of Quran</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View
                  style={[
                    styles.leftCol,
                    { backgroundColor: quran ? "honeydew" : "white" }
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
                    checked={quran}
                    onPress={() => {
                      setQuran(!quran)
                    }}
                  />
                </View>
                <View
                  style={[
                    styles.rightCol,
                    { backgroundColor: quran ? "honeydew" : "white" }
                  ]}
                >
                  <Text style={styles.taskText}>1 Manjil </Text>
                </View>
              </View>
            </>
          ) : topic === "sunnahSalah" ? (
            <>
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
                  <Text style={styles.taskText}>Fajr 2 rakat</Text>
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
                  <Text style={styles.taskText}>Duha Salah</Text>
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
                  <Text style={styles.taskText}>Dhuhr 4 rakat</Text>
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
                  <Text style={styles.taskText}>Dhuhr 2 Rakat </Text>
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
                  <Text style={styles.taskText}>Magrib 2 rakat</Text>
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
                  <Text style={styles.taskText}>Isha 2 rakat</Text>
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
                  <Text style={styles.taskText}>Witr</Text>
                </View>
              </View>
            </>
          ) : topic === "tahajjud" ? (
            <>
              <Text style={styles.taskHeader}>Tahajjud Alarm</Text>
            </>
          ) : null}
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
  header: {
    fontWeight: "bold",
    color: "seagreen",
    fontFamily: "Menlo",
    fontSize: hp("4%"),
    marginLeft: wp("5%")
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
  },
  days: {
    flexDirection: "row",
    paddingLeft: wp("5%"),
    marginVertical: hp("2%")
  },
  today: {
    width: wp("20%"),
    height: hp("10%"),
    borderRadius: hp("1%"),
    backgroundColor: "slateblue",
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp("2%")
  },
  date: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Menlo",
    fontSize: hp("2%")
  },
  backNav: {
    width: wp("100%"),
    height: hp("5%"),
    alignItems: "flex-start",
    paddingLeft: wp("1.5%"),
    borderBottomWidth: hp(".2%"),
    borderBottomColor: "whitesmoke"
  }
})
