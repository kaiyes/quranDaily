import { Stack } from 'expo-router';
import { useColorScheme, View } from 'react-native';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { LanguageContext } from '../utility/context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';


SplashScreen.preventAutoHideAsync();
export default function DuaLayout() {
    const [isLoaded] = useFonts({
        "me_quran": require("../assets/fonts/me_quran.ttf"),
        "SolaimanLipiNormal": require("../assets/fonts/SolaimanLipi.ttf"),
    });

    const [language, setLanguage] = useState('bn')

    const value = useMemo(
        () => ({ language, setLanguage }),
        [language, setLanguage]
    )
    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync(); //hide the splashscreen
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return null;
    }


    return (
        <View style={{ flex: 1 }} onLayout={handleOnLayout}>
            <StatusBar style="light" hidden={true} />
            <LanguageContext.Provider value={value}>
                <Stack
                    screenOptions={{
                        // headerShown: false
                    }}
                >
                    <Stack.Screen
                        name="index"
                        options={{
                            title: 'Dua'
                        }}
                    />
                    <Stack.Screen
                        name="categories"
                        options={{
                            title: 'Categorized Dua'
                        }}
                    />
                </Stack>
            </LanguageContext.Provider>
        </View>
    );
}
