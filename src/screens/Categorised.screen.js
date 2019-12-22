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

//utility
import Duas from "../utility/duas"

export default function Categorised({ route, navigation }) {
  const { pageTitle, category } = route.params

  return (
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
  }
})
