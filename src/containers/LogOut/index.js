import React, { useEffect } from 'react';
import { Spinner, View } from 'native-base';
import { connect } from 'react-redux';
import * as colors from '../../Theme/Color';
import styles from '../Login/styles';
import { actions as userAction } from '../../redux/actions/UserAction';

function LogOut(props) {

    useEffect(() => {
        let data = props.logout();
        props.navigation.navigate('Login');
    }, []);
    return (
        <View style={styles.container}>
            <Spinner color={colors.Green} />
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