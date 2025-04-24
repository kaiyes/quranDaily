import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import Colors from '../../../constants/Colors';

export default function ShortsLayout() {
    const colorScheme = useColorScheme();

    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Shorts',
                }}
            />
        </Stack>
    );
}
