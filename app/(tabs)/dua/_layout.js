import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { useMemo, useState } from 'react';
import { LanguageContext } from '../../../utility/context';

export default function DuaLayout() {

    const [language, setLanguage] = useState('bn')

    const value = useMemo(
        () => ({ language, setLanguage }),
        [language, setLanguage]
    )

    return (
        <LanguageContext.Provider value={value}>
            <Stack
                screenOptions={{
                    headerShown: false
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
    );
}
