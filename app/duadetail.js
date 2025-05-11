import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
  ScrollView
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
  interpolate,
  useAnimatedScrollHandler,
  Extrapolation,
  runOnJS,
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
  require("../assets/images/backgroundImgs/8.jpg"),
  require("../assets/images/backgroundImgs/9.jpg"),
  require("../assets/images/backgroundImgs/10.jpg"),
  require("../assets/images/backgroundImgs/11.jpg"),
  require("../assets/images/backgroundImgs/12.jpg"),
  require("../assets/images/backgroundImgs/13.jpg"),
  require("../assets/images/backgroundImgs/14.jpg"),
  require("../assets/images/backgroundImgs/15.jpg"),
  require("../assets/images/backgroundImgs/16.jpg"),
  require("../assets/images/backgroundImgs/17.jpg"),
  require("../assets/images/backgroundImgs/18.jpg"),

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

            {language === "en" ? (
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

            ) : (
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
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
const HScrollIndicator = ({hScrollX,index})=>{
  const hscrollIndicatorStyle = useAnimatedStyle(() => ({
    borderRadius:8,
    opacity:interpolate(
      hScrollX.value,
      [
        (index - 1) * screenWidth,  // previous item
        index * screenWidth,        // current item
        (index + 1) * screenWidth   // next item
      ],
      [
        0.5,
        1,
        0.5
      ],
      Extrapolation.CLAMP
    ),
    height:2,
    backgroundColor:'white',
    width: interpolate(
      hScrollX.value,
      [
        (index - 1) * screenWidth,  // previous item
        index * screenWidth,        // current item
        (index + 1) * screenWidth   // next item
      ],
      [
        20,  // width at previous item
        40,  // width at current item
        20   // width at next item
      ],
      Extrapolation.CLAMP
    )
  }))
  return(
    <Animated.View
                      style={hscrollIndicatorStyle}
                      />
  )
}
export default function DuaDetail() {
  const route = useRoute();
  const { pageTitle_en, pageTitle_bn, dua_key } = route.params
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
  const getItemLayout = useCallback((data, index) => ({
    length: itemHeight,
    offset: itemHeight * index,
    index,
  }), [itemHeight]);

  const onScrollToIndexFailed = useCallback(({ index, averageItemLength }) => {
    // Fallback handling for scrolling to index
    const wait = new Promise(resolve => setTimeout(resolve, 500));
    wait.then(() => {
      flatListRef.current?.scrollToIndex({
        index: index,
        animated: true
      });
    });
  }, []);


  const dua_index = useMemo(() => {
    return Duas.findIndex(item => item.key === dua_key);
  }, [dua_key]);

const modActiveIndex = (i)=>{
  setActiveIndex(i)
}
  const flatListRef = useRef(null);
  const hScrollX = useSharedValue(0)
  const hScrollHandler = useAnimatedScrollHandler({
    onScroll:(event)=>{
      hScrollX.value=event.contentOffset.x
      const horizontalIndex = Math.round(
        hScrollX.value / screenWidth
      );
      runOnJS(modActiveIndex)(horizontalIndex)
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.topControls}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        getItemLayout={getItemLayout}
        onScrollToIndexFailed={onScrollToIndexFailed}
        data={Duas}
        initialScrollIndex={dua_index}
        renderItem={({ item, index }) => (
          <>
          <Animated.ScrollView
            horizontal
            pagingEnabled
            snapToInterval={screenWidth}
            snapToAlignment="start"
            decelerationRate="fast"
            bounces={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            style={{
              height: itemHeight,
              width: screenWidth,
            }}
            onScroll={hScrollHandler}
          >
            {item.duas.map((dua, duaIndex) => (
              <DuaItem
                key={`${dua.arabic}-${duaIndex}`}
                item={dua}
                isActive={duaIndex === activeIndex}
                itemHeight={itemHeight}
                language={language}
              />
            ))}

          </Animated.ScrollView>
                      {/* Fixed Footer */}
                      <LinearGradient
                      colors={["transparent", "rgba(0,0,0,0.8)"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      locations={[0.3, 1]}
                      style={styles.footerContainer}
                    >
                        <Text style={styles.duaTitle}>
                          {language === "bn" ? item.pageTitle_bn : item.pageTitle_en}
                        </Text>
                        <Animated.View style={{flexDirection:'row',gap:2}}>
                    {item.duas.length>1 && item.duas.map((d,index)=>(
                      <HScrollIndicator
                      key={index.toString()+Math.random().toString()}
                      hScrollX={hScrollX}
                      index={index}
                      />
                    ))}
                        </Animated.View>
                    </LinearGradient>

          </>
        )}
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
        // onViewableItemsChanged={onViewableItemsChanged}
      />
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
    paddingVertical:20,
    zIndex: 2,
    gap:10
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
