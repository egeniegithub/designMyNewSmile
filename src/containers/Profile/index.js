import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CustomHeader from "../../components/CustomHeader";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction';
import { alertMessage } from '../../common/functions';
import BottomBar from '../../components/BottomBar';



function Profile(props) {
    let { u_fname, u_email, u_contact, } = props.userObject
    const [name, setName] = useState(u_fname);
    const [email, setEmail] = useState(u_email);
    const [phoneNo, setPhoneNo] = useState(u_contact);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [spinnerOnButton, setSpinnerOnButton] = useState(false);

    function onPressMenu() {
        props.navigation.toggleDrawer();
    }

    async function onPressUpdateProfile() {
        if (password !== confirmPassword) {
            alertMessage('Mismatch Passord!', 'Please check your password.',
                () => { setSpinnerOnButton(false) },
                ''
            );
        } else {
            setSpinnerOnButton(true);
            let data = await props.updateProfile(name, phoneNo, password);
            if (!data.error) {
                alertMessage('Congratulation!', 'Your profile has been successfully updated.',
                    () => { setSpinnerOnButton(false) },
                    ''
                );
            } else {
                alertMessage('Error!', data.message,
                    () => { setSpinnerOnButton(false) },
                    ''
                );
            }
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Profile"
                leftIcon="menu"
                onPress={onPressMenu}
            />
            <View style={styles.container}>
                <KeyboardAwareScrollView style={{ width: '90%', }}>
                    <Text style={styles.profileHeading}>Name</Text>
                    <InputField
                        placeholder="Name"
                        containerStyle={{ marginTop: 0 }}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <Text style={styles.profileHeading}>Email</Text>
                    <InputField
                        placeholder="Email Address?"
                        containerStyle={{ marginTop: 0 }}
                        disabled={true}
                        value={email}
                    />
                    <Text style={styles.profileHeading}>Phone No.</Text>
                    <InputField
                        placeholder="Phone Number"
                        containerStyle={{ marginTop: 0 }}
                        value={phoneNo}
                        onChangeText={text => setPhoneNo(text)}
                    />
                    <Text style={styles.profileHeading}>Password</Text>
                    <InputField
                        placeholder="Password"
                        containerStyle={{ marginTop: 0 }}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                    />
                    <Text style={styles.profileHeading}>Confirm Password</Text>
                    <InputField
                        placeholder="Confirm Password"
                        containerStyle={{ marginTop: 0 }}
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        secureTextEntry={true}
                    />
                    <CustomButton
                        text={"Update Profile"}
                        style={styles.customButton}
                        onPress={!spinnerOnButton ? onPressUpdateProfile : () => { }}
                        customButtonClick={spinnerOnButton}
                    />
                </KeyboardAwareScrollView>
                <BottomBar currentTab={2} token={props.token} navigation={props.navigation} currentScreen={'Profile'} />
            </View>

        </View>
    )
}

const mapStateToProps = state => {
    return {
        userObject: state.user.userObject,
        token: state.user.token,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateProfile: (name, phoneNo, password) => dispatch(actions.updateProfile(name, phoneNo, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);