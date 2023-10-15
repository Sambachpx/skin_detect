import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Settings, ScanEye} from 'lucide-react-native';

const bottomTab = createBottomTabNavigator();

const StyleContainer: StyleProp<ViewStyle> = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

function HomeScreen() {
  return (
    <View style={StyleContainer}>
      <Text>Welcome to SkinDetect</Text>
    </View>
  );
}

function ScanScreen() {
  return (
    <View style={StyleContainer}>
      <Text>Scan</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={StyleContainer}>
      <Text>Settings</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <bottomTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'Home';
              return <Home size={20} color={focused ? '#FFFFFF' : 'gray'} />;
            } else if (route.name === 'Scan') {
              iconName = 'ScanEye';
              return <ScanEye size={20} color={focused ? '#FFFFFF' : 'gray'} />;
            } else route.name === 'Settings';
            {
              iconName = 'Settings';
              return (
                <Settings size={20} color={focused ? '#FFFFFF' : 'gray'} />
              );
            }
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#000000',
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            height: 60,
          },
        })}>
        <bottomTab.Screen name="Home" component={HomeScreen} />
        <bottomTab.Screen name="Scan" component={ScanScreen} />
        <bottomTab.Screen name="Settings" component={SettingsScreen} />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
}
