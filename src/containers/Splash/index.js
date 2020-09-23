import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import SmileDesignDetail from '../SmileDesignDetail';
import { CommonActions } from '@react-navigation/native';
import colors from '../../Theme/color';

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
        if (props.token) {
            if (props.token && props.userObject.u_pic1) {
                resetStack('SmileDesign')
            } else if (props.token && !props.userObject.u_pic1) {
                resetStack('SelectTreatment')
            }
        } else {
            resetStack('SignUp')
        }
    }

    return (
        <View style={styles.container}>
            <View style={{height: 25, backgroundColor: colors.PrimaryColor}}/>
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
    token: state.user.token,
});

export default connect(mapStateToProps)(Splash);