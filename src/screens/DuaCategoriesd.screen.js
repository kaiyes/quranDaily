import React from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { Icon } from "react-native-elements"
//utility
import Duas from "../utility/duas"

export default function Categorised({ route, navigation }) {
  const { pageTitle, category } = route.params

  return (
    <>
      <View style={styles.backNav}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Icon name="arrow-bold-left" type="entypo" color="dimgray" />
        </TouchableOpacity>
        <Text style={styles.navHeader}>
          {pageTitle != null
            ? pageTitle.length > 15
              ? `${pageTitle.slice(0, 15)}...`
              : pageTitle
            : ""}
        </Text>
      </View>
      <FlatList
        data={Duas.filter(item => item.category == category)}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.flatList}
        style={styles.backgroundScrollView}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={function goToDetail() {
              navigation.navigate("DuaDetail", {
                pageTitle: item.pageTitle,
                duas: item.duas
              })
            }}
          >
            <View style={styles.circle}>
              <Text style={styles.number}>{item.id}</Text>
            </View>
            <Text style={styles.title}>{item.pageTitle}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  backgroundScrollView: {
    backgroundColor: "honeydew"
  },
  flatList: {
    backgroundColor: "honeydew"
  },
  item: {
    width: wp("95%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "lightgreen",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  number: {
    fontWeight: "500",
    fontSize: hp("2%"),
    color: "darkolivegreen",
    fontFamily: "Menlo"
  },
  title: {
    fontWeight: "400",
    fontSize: hp("2.1%"),
    color: "darkolivegreen",
    fontFamily: "Menlo",
    width: wp("80%")
  },
  backNav: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: wp("100%"),
    height: hp("10%"),
    alignItems: "flex-start",
    paddingLeft: wp("1.5%"),
    paddingTop: hp("4%"),
    backgroundColor: "honeydew",
    borderBottomWidth: hp(".2%"),
    borderBottomColor: "whitesmoke"
  },
  navHeader: {
    fontWeight: "bold",
    fontSize: hp("3%"),
    color: "darkolivegreen",
    fontFamily: "Menlo",
    marginLeft: wp("22%")
  }
})
