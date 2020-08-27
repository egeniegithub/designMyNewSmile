import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';


function Splash(props) {

    // useEffect(() => {
    //     let data = props.userObject;
    //     setTimeout(() => {
    //         if (data !== null) {
    //             props.navigation.navigate('Dashboard')
    //         } else {
    //             props.navigation.navigate('Login')
    //         }
    //     }, 2000)
    // }, []);

    function onPressGetStarted() {
        props.navigation.navigate('SignUp')
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.splashImage}
                source={require('../../assets/splash.png')}
            />
            <View style={styles.splashBody}>
                <Text style={styles.splashText}>GET YOUR TREATMENT DONE</Text>
                <Text style={styles.splashDetail}>Just 3 easy steps to get a new smile!</Text>
                <TouchableOpacity
                    onPress={onPressGetStarted}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
                <Text style={styles.copyrightText}>copyright @ DesignMySmile 2020</Text>
            </View>
        </View>
    )
}
const mapStateToProps = state => ({
    userObject: state.user.userObject,
});
export default connect(mapStateToProps)(Splash);