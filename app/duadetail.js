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
  ScrollView,
  Modal
} from "react-native";
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
import * as Sharing from 'expo-sharing';
import ViewShot from "react-native-view-shot";

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
  // require("../assets/images/backgroundImgs/13.jpg"),
  // require("../assets/images/backgroundImgs/14.jpg"),
  // require("../assets/images/backgroundImgs/15.jpg"),
  // require("../assets/images/backgroundImgs/16.jpg"),
  // require("../assets/images/backgroundImgs/17.jpg"),
  // require("../assets/images/backgroundImgs/18.jpg"),
  // require("../assets/images/backgroundImgs/19.jpg"),
];

const DuaItem = ({ item, isActive, itemHeight, language, indicatorWidth }) => {

  const [showShareableImage, setShowShareableImage] = useState(false);

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

  const hScrollX = useSharedValue(0)
  const hScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      hScrollX.value = event.contentOffset.x
    }
  })

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
    ...StyleSheet.absoluteFill,
    transform: [
      { scale: scale.value },
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: rotate.value },
    ],
  }));
  const [isSharing, setIsSharing] = useState(false);
  const viewShotRef = useRef(null);

  const captureAndShare = async () => {
    try {
      setIsSharing(true);
      // Wait for the modal to render
      await new Promise(resolve => setTimeout(resolve, 100));

      const uri = await viewShotRef.current.capture();
      await Sharing.shareAsync(uri, {
        mimeType: 'image/png',
        dialogTitle: 'Share Dua',
      });
    } catch (error) {
      console.error('Error sharing image:', error);
    } finally {
      setIsSharing(false);
    }
  };

  // const randomImage =
  //   backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  return (
    <View style={[styles.duaItem]}>
      {/* Background Image Container - Fixed position */}
      <Animated.View
        style={[animatedImageStyle]}
      >
        <Image
          source={item.backgroundImage}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </Animated.View>
      {/* Title & Scroll Indicator Container */}
      <Text style={styles.duaTitle}>
        {language === "bn" ? item.pageTitle_bn : item.pageTitle_en}
      </Text>
      {/* Scrollable Content Container */}
      <Animated.View style={styles.contentContainer}>
        <View style={styles.titleNIndicator}>
          {item.duas.length > 1 && (
            <View style={styles.indicatorContainer}>
              {item.duas.map((d, index) => (
                <HScrollIndicator
                  key={index.toString()}
                  hScrollX={hScrollX}
                  index={index}
                  indicatorWidth={indicatorWidth}
                />
              ))}
            </View>
          )}
        </View>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          snapToInterval={screenWidth - 32}
          snapToAlignment="start"
          decelerationRate="fast"
          bounces={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={hScrollHandler}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {item.duas.map((dua, duaIndex) => (
            <View
              key={`${dua.arabic}-${duaIndex}`}
              style={{
                gap: 20,
                maxHeight: screenHeight * 0.75,
                overflow: 'hidden',
                width: screenWidth - 32,
                padding: 20
              }}
            >
              <Text style={styles.dua}>{dua.arabic}</Text>
              {language === "en" ? (
                <>
                  {dua.transliteration && (
                    <Text style={styles.spelling}>
                      <Text style={styles.preSpell}>Spelling: </Text>
                      {dua.transliteration}
                    </Text>
                  )}
                  <Text style={styles.meaning}>
                    <Text style={styles.preSpell}>Meaning: </Text>
                    {dua.translations_en}
                  </Text>
                </>
              ) : (
                <>
                  {dua.transliteration_bn && (
                    <Text style={styles.spelling}>
                      <Text style={styles.preSpell}>উচ্চারণ: </Text>
                      {dua.transliteration_bn}
                    </Text>
                  )}
                  <Text style={styles.meaning}>
                    <Text style={styles.preSpell}>অর্থ: </Text>
                    {dua.translations_bn}
                  </Text>
                </>
              )}
            </View>

          ))}
        </Animated.ScrollView>
      </Animated.View>
      <TouchableOpacity
        style={styles.shareButton}
        onPress={captureAndShare}
      >
        <Ionicons name="share-outline" size={24} color="white" />
      </TouchableOpacity>

      {isSharing && (
        <Modal
          visible={isSharing}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsSharing(false)}
        >
          <View style={styles.modalContainer}>
            <ShareableDuaImage
              dua={item.duas[Math.floor(hScrollX.value / (screenWidth - (32 * 2)))]}
              backgroundImage={item.backgroundImage}
              language={language}
              viewShotRef={viewShotRef}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

const ShareableDuaImage = ({ dua, backgroundImage, language, viewShotRef }) => {
  return (
    <ViewShot
      ref={viewShotRef}
      options={{
        format: 'png',
        quality: 1,
      }}
      style={styles.shareableContainer}
    >
      <Image
        source={backgroundImage}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />
      <View style={styles.shareableContent}>
        <Text style={styles.shareableDua}>{dua.arabic}</Text>
        {language === "en" ? (
          <>
            {dua.transliteration && (
              <Text style={styles.shareableSpelling}>
                <Text style={styles.shareablePreSpell}>Spelling: </Text>
                {dua.transliteration}
              </Text>
            )}
            <Text style={styles.shareableMeaning}>
              <Text style={styles.shareablePreSpell}>Meaning: </Text>
              {dua.translations_en}
            </Text>
          </>
        ) : (
          <>
            {dua.transliteration_bn && (
              <Text style={styles.shareableSpelling}>
                <Text style={styles.shareablePreSpell}>উচ্চারণ: </Text>
                {dua.transliteration_bn}
              </Text>
            )}
            <Text style={styles.shareableMeaning}>
              <Text style={styles.shareablePreSpell}>অর্থ: </Text>
              {dua.translations_bn}
            </Text>
          </>
        )}
      </View>
    </ViewShot>
  );
};
const HScrollIndicator = ({ hScrollX, index, indicatorWidth }) => {

  const hscrollIndicatorStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      hScrollX.value,
      [
        (index - 1) * screenWidth,  // previous item
        index * screenWidth,        // current item
        (index + 1) * screenWidth   // next item
      ],
      [
        0.5,  // less opacity for previous item
        1,    // full opacity for current item
        0.5   // less opacity for next item
      ],
      Extrapolation.CLAMP
    );

    const scaleX = interpolate(
      hScrollX.value,
      [
        (index - 1) * screenWidth,  // previous item
        index * screenWidth,        // current item
        (index + 1) * screenWidth   // next item
      ],
      [
        0.85,  // less dramatic scale for inactive items
        1,     // full scale for active item
        0.85   // less dramatic scale for inactive items
      ],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      borderRadius: 8,
      height: 4,
      backgroundColor: 'white',
      width: indicatorWidth,
      transform: [{ scaleX }],
      // transformOrigin: 'center'
    };
  });

  return (
    <Animated.View style={hscrollIndicatorStyle} />
  );
};


export default function DuaDetail() {
  const route = useRoute();
  const { pageTitle_en, pageTitle_bn, dua_key } = route.params
  const { language } = useContext(LanguageContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const insets = useSafeAreaInsets();
  const itemHeight = screenHeight

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

  const flatListRef = useRef(null);

  const calculateIndicatorWidth = (duasLength) => {
    const availableWidth = screenWidth - (32 * 2);
    const totalGapSpace = (duasLength - 1) * 2;
    const rawIndicatorWidth = (availableWidth - totalGapSpace) / duasLength;
    const maxIndicatorWidth = 25;
    const minIndicatorWidth = 10;
    return Math.max(minIndicatorWidth, Math.min(rawIndicatorWidth, maxIndicatorWidth));
  };

  const duasWithImages = useMemo(() => {
    return Duas.map(item => ({
      ...item,
      backgroundImage: backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
    }));
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <TouchableOpacity style={styles.navBackButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        getItemLayout={getItemLayout}
        onScrollToIndexFailed={onScrollToIndexFailed}
        data={duasWithImages}
        initialScrollIndex={dua_index}
        renderItem={({ item, index }) => (
          <DuaItem
            item={item}
            isActive={index === activeIndex}
            itemHeight={itemHeight}
            language={language}
            indicatorWidth={calculateIndicatorWidth(item.duas.length)}
          />
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
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  navBackButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 2,
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: 'center',
    justifyContent: 'center'
  },
  duaItem: {
    width: screenWidth,
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden",
    gap: 16,
    paddingTop: 70
  },
  titleNIndicator: {
    // position: "absolute",
    // marginTop: 90,
    // marginHorizontal: 16,
    zIndex: 10,
    gap: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: "90%",
    marginTop: 20
  },
  indicatorContainer: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    gap: 10,
    // marginTop: 90,
    marginBottom: 16,
    width: screenWidth - 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.5)'
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
    top: screenHeight * 0.05,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 20,
    zIndex: 2,
    gap: 10
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  duaTitle: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "SolaimanLipiNormal",
    fontWeight: "500",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: screenWidth - 32,
    borderRadius: 16,
    flexWrap: 'wrap', // Allow text to wrap
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
  shareButton: {
    position: 'absolute',
    top: 40,
    right: 16,
    zIndex: 2,
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  shareableContainer: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  shareableContent: {
    // flex: 1,
    width: screenWidth - 64,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    maxHeight: screenHeight * 0.7,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  shareableDua: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'me_quran',
    marginBottom: 20,
  },
  shareableSpelling: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'SolaimanLipiNormal',
    marginBottom: 10,
  },
  shareableMeaning: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'SolaimanLipiNormal',
  },
  shareablePreSpell: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'SolaimanLipiNormal',
  },
  modalContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    zIndex: 5000,
    top: 16,
    right: 16,
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
