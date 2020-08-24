import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from '../Theme/Color';
import Splash from "../containers/Splash";
import Login from "../containers/Login";
import Home from "../containers/Dashboard/Home";
import Detail from "../containers/Dashboard/Detail";
import SignUp from "../containers/SignUp";
import Profile from "../containers/Profile";
import Settings from "../containers/Settings";
import LogOut from "../containers/LogOut";



const Tab = createBottomTabNavigator();

function BottomNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                } else if (route.name === 'Detail') {
                    iconName = focused ? 'person-outline' : 'person-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: '#00cc00',
                inactiveTintColor: 'white',
                style: {
                    backgroundColor: colors.Green
                },

            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Detail" component={Detail} />
        </Tab.Navigator >
    )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen name="Dashboard" component={BottomNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="LogOut" component={LogOut} />
        </Drawer.Navigator>
    )
}



function Navigation() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Dashboard" component={DrawerNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;