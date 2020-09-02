import React, { useEffect } from 'react';
import { View, Text } from 'native-base';
import { connect } from 'react-redux';
import colors from '../../Theme/color';
import styles from '../Login/styles';
import { actions as userAction } from '../../redux/actions/UserAction';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';

function LogOut(props) {

    function onPressLoginButton() {
        props.logout();
        props.navigation.navigate('Splash')
    }


    function onPressMenu() {
        props.navigation.toggleDrawer();
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="LogOut"
                leftIcon="menu"
                onPress={onPressMenu}
            />
            <View style={styles.container}>
                <Text>Press below button to logout current user.</Text>
                <CustomButton
                    text={"Logout"}
                    style={styles.customButton}
                    onPress={onPressLoginButton}
                />
            </View>
        </View>
    )
}

const mapStateToProps = state => ({
    userObject: state.user.userObject,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(userAction.setLogOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);