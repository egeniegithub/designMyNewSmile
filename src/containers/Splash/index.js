import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';


function Splash(props) {

    useEffect(() => {
        let data = props.userObject;
        setTimeout(() => {
            if (data !== null) {
                props.navigation.navigate('Dashboard')
            } else {
                props.navigation.navigate('Login')
            }
        }, 2000)
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.splashText}> Splash Screen </Text>
        </View>
    )
}
const mapStateToProps = state => ({
    userObject: state.user.userObject,
});
export default connect(mapStateToProps)(Splash);