import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



//utility
import Duas from "../utility/dua";
import { LanguageContext } from "../utility/context";
import { Stack, useNavigation } from "expo-router";

export default function AllDua() {
  const navigation = useNavigation();
  const { language, setLanguage } = useContext(LanguageContext);

  function goToDetail(item) {
    navigation.navigate("duadetail", {
      pageTitle_en: item.pageTitle_en,
      pageTitle_bn: item.pageTitle_bn,
      //   duas: item.duas,
      dua_key: item.key,
    });
  }

  return (
    <View style={styles.root}>
      <Stack.Screen
        options={{
          headerTitle: language === 'bn' ? "সকল দুয়া" : "All Duas",
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'honeydew' },
          headerShadowVisible: false
        }}
      />
      <FlatList
        data={Duas}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.scrollContainer}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => goToDetail(item)}
          >
            <View style={styles.circle}>
              <Text style={styles.number}>{index + 1}</Text>
            </View>
            <Text style={styles.title}>
              {language === "en" ? item.pageTitle_en : item.pageTitle_bn}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "honeydew",
  },
  scrollContainer: {
    backgroundColor: "honeydew",
    alignItems: "center",
  },
  itemName: {
    fontWeight: "500",
    width: wp("30%"),
    flexWrap: "wrap",
    fontSize: hp("2%"),
    color: "white",
    fontFamily: "Menlo",
  },
  item: {
    width: wp("95%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
  },
  circle: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    backgroundColor: 'lightgreen',
    marginRight: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  spacer: {
    marginTop: hp("5%"),
  },
  number: {
    fontWeight: '700',
    fontSize: hp('2%'),
    color: 'darkolivegreen',
    fontFamily: 'Menlo'
  },
  tabBarText: {
    fontWeight: "500",
    fontSize: hp("1.6%"),
    color: "darkolivegreen",
    fontFamily: "Menlo",
  },
  underline: {
    backgroundColor: "darkgreen",
  },
  title: {
    fontWeight: '400',
    fontSize: hp('2%'),
    color: 'darkolivegreen',
    fontFamily: 'SolaimanLipiNormal',
    width: wp('75%')
  },
  backNav: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: wp("100%"),
    alignItems: "flex-start",
    paddingLeft: wp("3.5%"),
    paddingTop: hp("2%"),
    backgroundColor: "honeydew",
    borderBottomWidth: hp(".2%"),
    borderBottomColor: "whitesmoke",
  },
  navHeader: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#383849",
    fontFamily: "Menlo",
    marginLeft: wp("30%"),
    marginBottom: hp("1%"),
  },
});
