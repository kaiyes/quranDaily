import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: route.name === 'quran' ? 'darkseagreen' : 'lightsteelblue',
        tabBarStyle: {
          backgroundColor: route.name === 'quran' ? 'royalblue' : route.name === 'shorts' ? '#0f0f0f' : 'seagreen',
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          ...Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        },
        tabBarLabelStyle: {
          fontWeight: '400',
          fontFamily: 'Menlo',
          fontSize: 14
        },
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarIcon: ({ focused, color, size = 22 }) => {
          if (route.name === 'dua') {
            return <Icon name="air" type="entypo" size={size} color={color} />;
          } else if (route.name === 'quran') {
            return <Icon name="book" type="entypo" size={size} color={color} />;
          } else if (route.name === 'shorts') {
            return <Icon name="video" type="entypo" size={size} color={color} />;
          }
        }
      })}>
      <Tabs.Screen
        name="quran"
        options={{
          title: 'Quran',
        }}
      />
      <Tabs.Screen
        name='shorts'
        options={{
          title: 'Shorts'
        }}
      />
      <Tabs.Screen
        name="dua"
        options={{
          title: 'Dua',
        }}
      />
    </Tabs>
  );
}
