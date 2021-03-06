import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen () {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                Home !
            </Text>
        </View>
    )
}

function SettingScreen () {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Setting !</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

function TabNavigation () {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component = {SettingScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;