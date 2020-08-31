import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import SmileDesignDetail from '../SmileDesignDetail';
import { StackActions, CommonActions } from '@react-navigation/native';


function Splash(props) {

    function resetStack(name) {
        props.navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: name },
                ],
            })
        );
    }

    function onPressGetStarted() {
        let data = props.userObject;
        console.log('DAta here. . . ', data);
        if (data) {
            if (data.token && data.user.u_pic1) {
                resetStack('SmileDesign')
            } else if (data.token && !data.user.u_pic1) {
                resetStack('SelectTreatment')
            }
        } else {
            resetStack('SignUp')
        }
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
            {/* <SmileDesignDetail /> */}
        </View>
    )
}
const mapStateToProps = state => ({
    userObject: state.user.userObject,
});

export default connect(mapStateToProps)(Splash);