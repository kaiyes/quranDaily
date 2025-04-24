import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import Colors from '../../../constants/Colors';

export default function QuranLayout() {
    const colorScheme = useColorScheme();

    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='index'
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Quran',
                }}
            />
            <Stack.Screen
                name="sura"
                options={{
                    title: 'Sura',
                }}
            />
        </Stack>
    );
}
