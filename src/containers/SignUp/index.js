import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from './../../components/ProgressBar';
import BottomBar from '../../components/BottomBar';
import UserService from '../../services/UserService';
import { alertMessage } from '../../common/functions';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction';

function SignUp(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [dob, setDob] = useState('');

    function onPressMenu() {
        props.navigation.toggleDrawer();
    }

    async function onPressMoveToNext() {
        if (!name || !email || !phoneNo || !dob) {
            alertMessage('Empty Field!' ,'Please fill all fields.', 
            () => {}, 
            ''
            );
        } else {
            let signupData = await props.signUp(name, email, phoneNo, dob);
            if (!signupData.error) {
                props.navigation.navigate('login')
            } else {
                alert(signupData.message)
            }
        }
        // props.navigation.navigate('SelectTreatment')


        // let loginData = await UserService.doLogin('mitohi9088@kespear.com', 'wcg2frmrai');
        // console.log('Login Data  < >  : ', loginData);
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Personal Information"
                leftIcon="menu"
                onPress={onPressMenu}
            />
            <View style={styles.container}>
                <ProgressBar stepNumber={1} />
                <Text style={styles.signUpText}>SIGNIUP NOW</Text>
                <KeyboardAwareScrollView style={{ width: '90%', }}>
                    <InputField
                        placeholder="What is your Name?"
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <InputField
                        placeholder="What is your Email Address?"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <InputField
                        placeholder="what is your Contact Number?"
                        value={phoneNo}
                        onChangeText={text => setPhoneNo(text)}
                    />
                    <InputField
                        placeholder="What is your Date of Birth?"
                        value={dob}
                        onChangeText={text => setDob(text)}
                    />
                    <CustomButton
                        text={"MOVE TO NEXT"}
                        style={styles.customButton}
                        onPress={onPressMoveToNext}
                    />
                </KeyboardAwareScrollView>

                <BottomBar currentTab={1} />
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
        signUp: (name, email, phoneNo, dob) => dispatch(actions.setSignUp(name, email, phoneNo, dob))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);