import React, { useContext } from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Icon, CheckBox } from 'react-native-elements'
import {
    Notifier,
    Easing,
    NotifierComponents
} from 'react-native-notifier'
import Categories from '../utility/categories'
import { Stack, useNavigation } from 'expo-router'
import { LanguageContext } from '../utility/context'
const backgroundImages = [
    require('../assets/images/duabg/1.jpg'),
    require('../assets/images/duabg/2.jpg'),
    require('../assets/images/duabg/3.jpg'),
    require('../assets/images/duabg/4.jpg'),
];
export default function Page() {
    const { navigate } = useNavigation()
    const { language, setLanguage } =
        useContext(LanguageContext)

    async function changeLang(lang) {
        await setLanguage(lang)
        Notifier.showNotification({
            title: 'language changed',
            duration: 1000,
            showAnimationDuration: 220,
            Component: NotifierComponents.Alert,
            componentProps: {
                alertType: 'success'
            }
        })
    }

    return (
        <View style={styles.root}>
            <Stack.Screen
            options={{
                headerTitle:"Dua Categories",
                headerStyle:{backgroundColor: 'honeydew'},
            headerShadowVisible:false,
                headerRight:()=>{
                    return(
                        <View style={styles.favHolder}>
                        <TouchableOpacity
                            style={[
                                styles.globe,
                                language === 'bn'
                                    ? {
                                        backgroundColor: 'black'
                                    }
                                    : null
                            ]}
                            onPress={() => changeLang('bn')}>
                            <Text style={styles.langText}>ব</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.globe,
                                language === 'en'
                                    ? {
                                        backgroundColor: 'black'
                                    }
                                    : null
                            ]}
                            onPress={() => changeLang('en')}>
                            <Text style={styles.langText}>E</Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity
                            onPress={() => {
                                navigate('allduas')
                            }}>
                            <Icon
                                name="globe"
                                type="entypo"
                                color="seagreen"
                                size={12}
                                reverse
                                reverseColor="white"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigate('favourites')
                            }}>
                            <Icon
                                name="heart"
                                type="entypo"
                                color="seagreen"
                                size={12}
                                reverse
                                reverseColor="white"
                            />
                        </TouchableOpacity>
                    </View>
                    )
                }
            }}
            />

            <FlatList
                data={Categories}
                keyExtractor={item => item.key}
                contentContainerStyle={styles.scrollContainer}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={[
                            styles.itemContainer,
                            {
                                marginRight: index % 2 === 0 ? wp('4%') : null
                            }
                        ]}
                        onPress={() =>
                            navigate('categories', {
                                pageTitle:
                                    language === 'bn'
                                        ? item.name_bn
                                        : item.name_en,
                                category: item.category
                            })
                        }>
                        <Image
                            source={backgroundImages[(index % 4)]}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%'
                            }}
                            resizeMode="cover"
                        />
                        <View
                            style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.7)' }]}
                        />
                        <Text
                            style={[
                                styles.itemName,
                                {
                                    fontFamily:
                                        language === 'bn'
                                            ? 'SolaimanLipiNormal'
                                            : 'Menlo-Regular'
                                }
                            ]}>
                            {language === 'bn'
                                ? item.name_bn
                                : item.name_en}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'honeydew'
    },
    scrollContainer: {
        backgroundColor: 'honeydew',
        paddingHorizontal: wp('4%'),
        gap: wp('4%'),
        paddingBottom: wp('4%')
        // paddingVertical: hp('2%'),
        // padding: wp('2%'),
        // alignItems: 'center'
    },
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp('2%'),
        paddingHorizontal: wp('5%')
    },
    favHolder: {
        flexDirection: 'row',
        marginRight: wp('2%'),
        alignItems: 'center'
    },
    globe: {
        height: wp('7%'),
        width: wp('7%'),
        borderRadius: wp('3.5%'),
        backgroundColor: 'seagreen',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp('2%')
    },
    title: {
        fontWeight: 'bold',
        color: '#1c1c1c',
        fontFamily: 'Menlo',
        fontSize: 22
    },
    itemContainer: {
        flex: 1,
        // width: wp('50%'),
        aspectRatio: 1,
        // height: hp('16%'),
        // backgroundColor: '#343a40',
        //backgroundColor: '#416D03',
        borderRadius: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
        // margin: wp('2%'),
        // marginRight: wp('2%'),
        // marginBottom: hp('2%'),
    },
    itemName: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: wp('4%')
    },
    duaHolder: {
        width: wp('35%'),
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('4%'),
        marginLeft: wp('3%'),
        marginTop: hp('1%')
    },
    spacer: {
        height: hp('3%')
    },
    row: {
        flexDirection: 'row',
        width: wp('100%'),
        marginTop: hp('3%'),
        alignItems: 'center'
    },
    spacerH: {
        width: wp('5%')
    },
    langText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 14
    }
})
