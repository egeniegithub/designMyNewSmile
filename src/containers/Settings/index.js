import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CustomHeader from "../../components/CustomHeader";
import CustomButton from '../../components/CustomButton';
import { alertMessage } from '../../common/functions';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction';
import { CommonActions } from '@react-navigation/native';


function Settings(props) {
    const [spinnerOnButton, setSpinnerOnButton] = useState(false);
    function onPressMenu() {
        props.navigation.toggleDrawer();
    }

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

    function onPressDeactivate() {
        alertMessage('Deactivate', 'Are you sure you want to Deactivate your account?',
            async () => {
                setSpinnerOnButton(true);
                await props.deactivateAccount();
                resetStack('Splash');
            },
            () => { }
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Settings"
                leftIcon="menu"
                onPress={onPressMenu}
            />
            <View style={styles.container}>
                <Text style={styles.deactivateText}>Your account is currently active. Press the button to deactivate</Text>
                <CustomButton
                    text={"Deactivate"}
                    style={styles.customButton}
                    onPress={!spinnerOnButton ? onPressDeactivate : () => { }}
                    customButtonClick={spinnerOnButton}
                />
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        userObject: state.user.userObject,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deactivateAccount: () => dispatch(actions.deactivateAccount()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);