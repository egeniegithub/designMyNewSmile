import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../Theme/colors';
import Splash from "../containers/Splash";
import Login from "../containers/Login";
import Home from "../containers/Dashboard/Home";
import Detail from "../containers/Dashboard/Detail";
import SignUp from "../containers/SignUp";
import Profile from "../containers/Profile";
import Settings from "../containers/Settings";
import LogOut from "../containers/LogOut";
import SelectTreatment from '../containers/SelectTreatment';
import PhotosAndUpload from '../containers/PhotosAndUpload';
import SmileDesign from '../containers/SmileDesign';
import GetAppointment from '../containers/GetAppointment';
import UploadedPictures from '../containers/UploadedPicture';
import FAQ from '../containers/FAQ';
import HowItWork from '../containers/HowItWork';
import AboutUs from '../containers/AboutUs';
import SmileDesignDetail from '../containers/SmileDesignDetail';
import { connect } from 'react-redux';



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

function DrawerNavigator(props) {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Dashboard">
                <Drawer.Screen name="Dashboard" component={Navigation} />
                {!props.token && <Drawer.Screen name="Login" component={Login} />}
                {/* {props.token && <Drawer.Screen name="Profile" component={Profile} />} */}
                {/* {props.token && <Drawer.Screen name="Uploaded Pictures" component={UploadedPictures} />} */}
                {/* {props.token && <Drawer.Screen name="Smile Design" component={SmileDesign} />} */}
                <Drawer.Screen name="How It Work" component={HowItWork} />
                <Drawer.Screen name="About Us" component={AboutUs} />
                <Drawer.Screen name="FAQ" component={FAQ} />
                {props.token && <Drawer.Screen name="Settings" component={Settings} />}
                {props.token && <Drawer.Screen name="LogOut" component={LogOut} />}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}



function Navigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SelectTreatment" component={SelectTreatment} />
            <Stack.Screen name="PhotosAndUpload" component={PhotosAndUpload} />
            <Stack.Screen name="SmileDesign" component={SmileDesign} />
            <Stack.Screen name="GetAppointment" component={GetAppointment} />
            <Stack.Screen name="SmileDesignDetail" component={SmileDesignDetail} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="UploadedPictures" component={UploadedPictures} />
        </Stack.Navigator>
    )
}

const mapStateToProps = state => {
    return {
        token: state.user.token,
    };
};

export default connect(mapStateToProps)(DrawerNavigator);