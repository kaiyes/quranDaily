import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Pressable, Image } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Audio } from 'expo-av';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
    Easing,
    cancelAnimation
} from 'react-native-reanimated';
import duas from '../../../utility/dua'; // Add this import
import { useIsFocused } from '@react-navigation/native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

// Sample data for shorts with image URLs instead of videos
// const shortsData = [
//     {
//         id: '1',
//         imageUrl: require('../../../assets/images/backgroundImgs/1.jpg'),
//         title: 'رَبِّ زِدْنِي عِلْمًا (My Lord, increase me in knowledge)',
//     },
//     {
//         id: '2',
//         imageUrl: require('../../../assets/images/backgroundImgs/2.jpg'),
//         title: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً (Our Lord, give us in this world [that which is] good)',
//     },
//     {
//         id: '3',
//         imageUrl: require('../../../assets/images/backgroundImgs/3.jpg'),
//         title: 'اللّهُمَّ اغْفِرْ لِي (O Allah, forgive me)',
//     },
//     {
//         id: '4',
//         imageUrl: require('../../../assets/images/backgroundImgs/4.jpg'),
//         title: 'رَبِّ اشْرَحْ لِي صَدْرِي (My Lord, expand for me my chest)',
//     },
//     {
//         id: '5',
//         imageUrl: require('../../../assets/images/backgroundImgs/5.jpg'),
//         title: 'اللّهُمَّ ارْزُقْنِي حَلالًا طَيِّبًا (O Allah, provide me with lawful and pure sustenance)',
//     },
//     {
//         id: '6',
//         imageUrl: require('../../../assets/images/backgroundImgs/6.jpg'),
//         title: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ (My Lord, make me an establisher of prayer)',
//     },
//     {
//         id: '7',
//         imageUrl: require('../../../assets/images/backgroundImgs/7.jpg'),
//         title: 'اللّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ (O Allah, I ask You for Paradise)',
//     },
// ];
const backgroundImages = [
    require('../../../assets/images/backgroundImgs/1.jpg'),
    require('../../../assets/images/backgroundImgs/2.jpg'),
    require('../../../assets/images/backgroundImgs/3.jpg'),
    require('../../../assets/images/backgroundImgs/4.jpg'),
    require('../../../assets/images/backgroundImgs/5.jpg'),
    require('../../../assets/images/backgroundImgs/6.jpg'),
    require('../../../assets/images/backgroundImgs/7.jpg'),
];
// Replace the shortsData creation with this:
const shortsData = duas
    .filter(category => category.category === "quranic")
    .flatMap(category => category.duas.map((dua, index) => ({
        id: (index + 1).toString(),
        imageUrl: backgroundImages[index % 7],
        title: `${dua.arabic} (${dua.translations_en})`,
        dua: dua
    })));
console.log(shortsData);
const ShortItem = ({ item, isActive, itemHeight }) => {
    const [sound, setSound] = useState()
    const isFocused = useIsFocused();

    // Add audio loading and playback
    useEffect(() => {
        let isMounted = true;

        async function loadAndPlayAudio() {
            try {
                if (sound) {
                    await sound.stopAsync();
                    await sound.unloadAsync();
                }

                const { sound: newSound } = await Audio.Sound.createAsync(
                    require('../../../assets/audio/background.mp3'), // Replace with your audio file
                    {
                        isLooping: true,
                        shouldPlay: isActive,
                        volume: 1.0,
                    }
                );

                if (isMounted) {
                    setSound(newSound);
                    if (isActive && isFocused) {
                        await newSound.playAsync();
                    }
                }
            } catch (error) {
                console.log('Error loading audio:', error);
            }
        }

        loadAndPlayAudio();

        return () => {
            isMounted = false;
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [isActive]);

    // Handle audio when component unmounts
    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [sound]);


    // Calculate the minimum scale needed to cover the container during animation
    const baseScale = 1.4;  // Increased from 1.3 to ensure coverage
    const scale = useSharedValue(1);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const rotate = useSharedValue('0deg');

    // Adjust random offsets to be smaller relative to screen size
    const randomOffsets = useRef({
        x: (parseInt(item.id) % 4 + 1) * 8,
        y: (parseInt(item.id) % 3 + 1) * 6,
        rotation: (parseInt(item.id) % 2) * 0.3,
        duration: {
            scale: 8000 + (parseInt(item.id) % 3) * 1000,
            translate: 12000 + (parseInt(item.id) % 4) * 1000,
            initial: 2000, // Duration for initial scale up
            final: 2000    // Duration for final scale down
        }
    }).current;

    useEffect(() => {
        if (isActive) {
            // Initial scale from 1 to baseScale
            scale.value = withSequence(
                // First scale up from 1 to baseScale
                withTiming(baseScale, {
                    duration: randomOffsets.duration.initial,
                    easing: Easing.bezier(0.4, 0, 0.6, 1)
                }),
                // Then start the existing animation loop
                withRepeat(
                    withSequence(
                        withTiming(baseScale - 0.1, {
                            duration: randomOffsets.duration.scale / 2,
                            easing: Easing.bezier(0.4, 0, 0.6, 1)
                        }),
                        withTiming(baseScale + 0.1, {
                            duration: randomOffsets.duration.scale / 2,
                            easing: Easing.bezier(0.4, 0, 0.6, 1)
                        })
                    ),
                    -1,  // Infinite repeat
                    true // Smooth reversing
                )
            );

            // Smooth X movement
            translateX.value = withRepeat(
                withSequence(
                    withTiming(randomOffsets.x, {
                        duration: randomOffsets.duration.translate / 2,
                        easing: Easing.bezier(0.4, 0, 0.6, 1)
                    }),
                    withTiming(-randomOffsets.x, {
                        duration: randomOffsets.duration.translate / 2,
                        easing: Easing.bezier(0.4, 0, 0.6, 1)
                    })
                ),
                -1,
                true  // Set to true for smooth reversing
            );

            // Smooth Y movement
            translateY.value = withRepeat(
                withSequence(
                    withTiming(randomOffsets.y, {
                        duration: randomOffsets.duration.translate / 2,
                        easing: Easing.bezier(0.4, 0, 0.6, 1)
                    }),
                    withTiming(-randomOffsets.y, {
                        duration: randomOffsets.duration.translate / 2,
                        easing: Easing.bezier(0.4, 0, 0.6, 1)
                    })
                ),
                -1,
                true  // Set to true for smooth reversing
            );

            // Smooth rotation
            rotate.value = withRepeat(
                withSequence(
                    withTiming(`${randomOffsets.rotation}deg`, {
                        duration: randomOffsets.duration.translate / 2,
                        easing: Easing.bezier(0.4, 0, 0.6, 1)
                    }),
                    withTiming(`-${randomOffsets.rotation}deg`, {
                        duration: randomOffsets.duration.translate / 2,
                        easing: Easing.bezier(0.4, 0, 0.6, 1)
                    })
                ),
                -1,
                true  // Set to true for smooth reversing
            );
        } else {
            // Reset animations
            cancelAnimation(scale);
            cancelAnimation(translateX);
            cancelAnimation(translateY);
            cancelAnimation(rotate);

            // scale.value = withTiming(baseScale);
            // Scale back to 1 when inactive
            scale.value = withTiming(1, {
                duration: randomOffsets.duration.final,
                easing: Easing.bezier(0.4, 0, 0.6, 1)
            });
            translateX.value = withTiming(0);
            translateY.value = withTiming(0);
            rotate.value = withTiming('0deg');
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
            { rotate: rotate.value }
        ]
    }));

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
                decelerationRate="fast"     // Changed from 0.9 to "fast"
                bounces={false}
                initialNumToRender={1}
                maxToRenderPerBatch={2}
                windowSize={3}
                removeClippedSubviews={true}
                snapToOffsets={shortsData.map((_, index) => index * itemHeight)} // Add this line
                disableIntervalMomentum={true}  // Add this line
                scrollEventThrottle={16}        // Add this line
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
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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