import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { useRoute } from "@react-navigation/native";
import { LanguageContext } from "../utility/context";
import { useContext } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  Easing,
  cancelAnimation,
} from "react-native-reanimated";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Duas from "../utility/dua";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const backgroundImages = [
  require("../assets/images/backgroundImgs/1.jpg"),
  require("../assets/images/backgroundImgs/2.jpg"),
  require("../assets/images/backgroundImgs/3.jpg"),
  require("../assets/images/backgroundImgs/4.jpg"),
  require("../assets/images/backgroundImgs/5.jpg"),
  require("../assets/images/backgroundImgs/6.jpg"),
  require("../assets/images/backgroundImgs/7.jpg"),
];

const DuaItem = ({ item, isActive, itemHeight, language }) => {
  const baseScale = 1.4;
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue("0deg");

  const randomOffsets = useRef({
    x: Math.random() * 8,
    y: Math.random() * 6,
    rotation: Math.random() * 0.3,
    duration: {
      scale: 8000 + Math.random() * 1000,
      translate: 12000 + Math.random() * 1000,
      initial: 8000,
      final: 2000,
    },
  }).current;

  useEffect(() => {
    if (isActive) {
      scale.value = withSequence(
        withTiming(baseScale, {
          duration: randomOffsets.duration.initial,
          easing: Easing.bezier(0.4, 0, 0.6, 1),
        }),
        withRepeat(
          withSequence(
            withTiming(baseScale - 0.1, {
              duration: randomOffsets.duration.scale / 2,
              easing: Easing.bezier(0.4, 0, 0.6, 1),
            }),
            withTiming(baseScale + 0.1, {
              duration: randomOffsets.duration.scale / 2,
              easing: Easing.bezier(0.4, 0, 0.6, 1),
            })
          ),
          -1,
          true
        )
      );

      translateX.value = withRepeat(
        withSequence(
          withTiming(randomOffsets.x, {
            duration: randomOffsets.duration.translate / 2,
            easing: Easing.bezier(0.4, 0, 0.6, 1),
          }),
          withTiming(-randomOffsets.x, {
            duration: randomOffsets.duration.translate / 2,
            easing: Easing.bezier(0.4, 0, 0.6, 1),
          })
        ),
        -1,
        true
      );

      translateY.value = withRepeat(
        withSequence(
          withTiming(randomOffsets.y, {
            duration: randomOffsets.duration.translate / 2,
            easing: Easing.bezier(0.4, 0, 0.6, 1),
          }),
          withTiming(-randomOffsets.y, {
            duration: randomOffsets.duration.translate / 2,
            easing: Easing.bezier(0.4, 0, 0.6, 1),
          })
        ),
        -1,
        true
      );
    } else {
      cancelAnimation(scale);
      cancelAnimation(translateX);
      cancelAnimation(translateY);
      cancelAnimation(rotate);

      scale.value = withTiming(1);
      translateX.value = withTiming(0);
      translateY.value = withTiming(0);
      rotate.value = withTiming("0deg");
    }

    return () => {
      cancelAnimation(scale);
      cancelAnimation(translateX);
      cancelAnimation(translateY);
      cancelAnimation(rotate);
    };
  }, [isActive]);

  const animatedImageStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: rotate.value },
    ],
  }));

  const randomImage =
    backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  return (
    <View style={[styles.duaItem, { height: itemHeight }]}>
      <View style={styles.imageContainer}>
        <Animated.View
          style={[styles.animatedImageContainer, animatedImageStyle]}
        >
          <Image
            source={randomImage}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </Animated.View>

        <View style={styles.contentContainer}>
          <View
            style={{
              padding: 16,
              borderRadius: 16,
              backgroundColor: "rgba(0,0,0,0.5)",
              gap: 20,
            }}
          >
            <Text style={styles.dua}>{item.arabic}</Text>

            {language === "bn" ? (
              <>
                {item.transliteration_bn && (
                  <Text style={styles.spelling}>
                    <Text style={styles.preSpell}>উচ্চারণ: </Text>
                    {item.transliteration_bn}
                  </Text>
                )}
                <Text style={styles.meaning}>
                  <Text style={styles.preSpell}>অর্থ: </Text>
                  {item.translations_bn}
                </Text>
              </>
            ) : (
              <>
                {item.transliteration && (
                  <Text style={styles.spelling}>
                    <Text style={styles.preSpell}>Spelling: </Text>
                    {item.transliteration}
                  </Text>
                )}
                <Text style={styles.meaning}>
                  <Text style={styles.preSpell}>Meaning: </Text>
                  {item.translations_en}
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default function DuaDetail() {
  const route = useRoute();
  const { pageTitle_en, pageTitle_bn, dua_index } = route.params;
  const { language } = useContext(LanguageContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const insets = useSafeAreaInsets();
  const itemHeight = screenHeight - insets.bottom;

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  console.log(dua_index);
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.topControls}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={Duas}
        initialScrollIndex={dua_index}
        renderItem={({ item, index }) => {
          return (
            <FlatList
              keyExtractor={(dua, index) =>
                `${dua.arabic}-${index.toString()}` ??
                `${dua.translations_en}-${index.toString()}`
              }
              horizontal
              pagingEnabled
              snapToInterval={screenWidth}
              snapToAlignment="start"
              decelerationRate={"fast"}
              bounces={false}
              snapToOffsets={item.duas.map(
                (i, mainindex) => mainindex * screenWidth
              )}
              disableIntervalMomentum={true}
              scrollEventThrottle={16}
              style={{
                height: itemHeight,
                width: screenWidth,
              }}
              viewabilityConfig={viewabilityConfig}
              data={item.duas}
              renderItem={(dua, index) => (
                <DuaItem
                  item={dua}
                  isActive={index === activeIndex}
                  itemHeight={itemHeight}
                  language={language}
                />
              )}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        snapToAlignment="start"
        decelerationRate="fast"
        bounces={false}
        initialNumToRender={1}
        maxToRenderPerBatch={2}
        windowSize={3}
        removeClippedSubviews={true}
        snapToOffsets={Duas.map((_, index) => index * itemHeight)}
        disableIntervalMomentum={true}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewableItemsChanged}
      />

      {/* Fixed Footer */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.3, 1]}
        style={styles.footerContainer}
      >
        <View style={styles.footerContent}>
          <Text style={styles.duaTitle}>
            {language === "bn" ? pageTitle_bn : pageTitle_en}
          </Text>
          {/* <Text style={styles.duaIndex}>
            {activeIndex + 1} / {duas.length}
          </Text> */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  topControls: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 2,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  duaItem: {
    width: screenWidth,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    overflow: "hidden",
  },
  animatedImageContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dua: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    fontFamily: "me_quran",
  },
  spelling: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontFamily: "SolaimanLipiNormal",
  },
  meaning: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontFamily: "SolaimanLipiNormal",
  },
  preSpell: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "SolaimanLipiNormal",
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 40,
    zIndex: 2,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  duaTitle: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "SolaimanLipiNormal",
    fontWeight: "500",
    flex: 1,
    marginRight: 16,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  duaIndex: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Menlo",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    overflow: "hidden",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
