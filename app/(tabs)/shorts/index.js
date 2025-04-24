import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Pressable, Image } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
    Easing,
    cancelAnimation
} from 'react-native-reanimated';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

// Sample data for shorts with image URLs instead of videos
const shortsData = [
    {
        id: '1',
        imageUrl: require('../../../assets/images/backgroundImgs/1.jpeg'),
        title: 'Microwave S\'mores Cake!',
    },
    {
        id: '2',
        imageUrl: require('../../../assets/images/backgroundImgs/2.jpeg'),
        title: 'Quick Breakfast Ideas',
    },
    {
        id: '3',
        imageUrl: require('../../../assets/images/backgroundImgs/3.jpeg'),
        title: '5-Minute Dessert Recipe',
    },
];

const ShortItem = ({ item, isActive, itemHeight }) => {
    // Animation values
    const scale = useSharedValue(1.3);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    // Start the animation when the component mounts or becomes active
    useEffect(() => {
        if (isActive) {
            // Create simple loop animations with withRepeat

            // 1. Scale animation: 1.3 -> 1.1 -> 1.3
            scale.value = 1.3; // Start at 1.3
            scale.value = withRepeat(
                withSequence(
                    withTiming(1.1, {
                        duration: 6000,
                        easing: Easing.inOut(Easing.ease)
                    }),
                    withTiming(1.3, {
                        duration: 6000,
                        easing: Easing.inOut(Easing.ease)
                    })
                ),
                -1, // Infinite repeats
                false // Don't reverse each sequence
            );

            // 2. X-axis movement: simple back and forth
            translateX.value = 0; // Start at 0
            translateX.value = withRepeat(
                withSequence(
                    withTiming(10, {
                        duration: 3000,
                        easing: Easing.inOut(Easing.ease)
                    }),
                    withTiming(-10, {
                        duration: 6000,
                        easing: Easing.inOut(Easing.ease)
                    }),
                    withTiming(0, {
                        duration: 3000,
                        easing: Easing.inOut(Easing.ease)
                    })
                ),
                -1, // Infinite repeats
                false // Don't reverse each sequence
            );

            // 3. Y-axis movement: simple back and forth
            translateY.value = 0; // Start at 0
            translateY.value = withRepeat(
                withSequence(
                    withTiming(10, {
                        duration: 3500,
                        easing: Easing.inOut(Easing.ease)
                    }),
                    withTiming(-10, {
                        duration: 7000,
                        easing: Easing.inOut(Easing.ease)
                    }),
                    withTiming(0, {
                        duration: 3500,
                        easing: Easing.inOut(Easing.ease)
                    })
                ),
                -1, // Infinite repeats
                false // Don't reverse each sequence
            );
        } else {
            // Reset animation when not active
            cancelAnimation(scale);
            cancelAnimation(translateX);
            cancelAnimation(translateY);

            scale.value = withTiming(1.3);
            translateX.value = withTiming(0);
            translateY.value = withTiming(0);
        }

        return () => {
            // Clean up animations on unmount
            cancelAnimation(scale);
            cancelAnimation(translateX);
            cancelAnimation(translateY);
        };
    }, [isActive]);

    // Create animated style for the image
    const animatedImageStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: scale.value },
                { translateX: translateX.value },
                { translateY: translateY.value }
            ]
        };
    });

    return (
        <View style={[styles.shortItem, { height: itemHeight }]}>
            <View style={styles.imageContainer}>
                <Animated.View style={[styles.animatedImageContainer, animatedImageStyle]}>
                    <Image
                        source={item.imageUrl}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </Animated.View>

                {/* Centered Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>


        </View>
    );
};

export default function Page() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
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

    return (
        <View style={styles.container}>
            {/* Top Controls */}
            <View style={styles.topControls}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <FlatList
                ref={flatListRef}
                data={shortsData}
                renderItem={({ item, index }) => (
                    <ShortItem
                        item={item}
                        isActive={index === activeIndex}
                        itemHeight={itemHeight}
                    />
                )}
                keyExtractor={(item) => item.id}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                snapToInterval={itemHeight}
                snapToAlignment="start"
                decelerationRate={0.9}
                bounces={false}
                initialNumToRender={1}
                maxToRenderPerBatch={2}
                windowSize={3}
                removeClippedSubviews={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    shortItem: {
        width: '100%',
        overflow: 'hidden',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    animatedImageContainer: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    topControls: {
        position: 'absolute',
        top: 40,
        left: 16,
        zIndex: 1,
    },
    titleContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 8,
        zIndex: 2,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});