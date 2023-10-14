import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Settings} from 'lucide-react-native';

const bottomTab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Settings</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <bottomTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'Home';
              return <Home size={20} color="#000000" />;
            } else if (route.name === 'Settings') {
              iconName = 'Settings';
              return <Settings size={20} color="#000000" />;
            }
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            height: 70,
          },
        })}>
        <bottomTab.Screen name="Home" component={HomeScreen} />
        <bottomTab.Screen name="Settings" component={SettingsScreen} />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
};
export default App;
