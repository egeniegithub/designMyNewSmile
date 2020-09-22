import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, TextInput } from 'react-native';
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
import { CommonActions } from '@react-navigation/native';
import CalendarPickerModal from '../../components/CalendarPickerModal';
import moment from 'moment';

function SignUp(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [dob, setDob] = useState('');
    const [showDOBCalendar, setShowDOBCalendar] = useState(false)
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

    async function onPressMoveToNext() {
        if (!name || !email || !phoneNo || !dob) {
            alertMessage('Empty Field!', 'Please fill all fields.',
                () => { },
                ''
            );
        } else {
            setSpinnerOnButton(true)
            let signupData = await props.signUp(name, email, phoneNo, dob);
            if (!signupData.error) {
                resetStack('Login')
            } else {
                alertMessage('Error!', signupData.message, () => {
                    setSpinnerOnButton(false)
                }, '')
            }
        }
    }

    function dateChange (date) {
        setShowDOBCalendar(false);
        setDob(moment(date).format('YYYY/MM/DD'))
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

                {showDOBCalendar && <CalendarPickerModal
                    isModalVisible={showDOBCalendar}
                    setIsModalVisible={() => setShowDOBCalendar(false)}
                    dateChanage={dateChange}
                />}
                <Text style={styles.signUpText}>SIGNUP NOW</Text>
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
                        placeholder="What is your Contact Number?"
                        value={phoneNo}
                        onChangeText={text => setPhoneNo(text)}
                    />
                    <InputField
                        placeholder="What is your Date of Birth?"
                        value={dob}
                        disabled={true}
                        onChangeText={text => setDob(text)}
                        rightIcon={'calendar'}
                        onPressRightIcon={() => setShowDOBCalendar(true)}
                    />
                    <CustomButton
                        text={"NEXT"}
                        style={styles.customButton}
                        onPress={!spinnerOnButton ? onPressMoveToNext : () => { }}
                        customButtonClick={spinnerOnButton}
                    />
                </KeyboardAwareScrollView>

                <BottomBar currentTab={1} userObject={props.userObject} navigation={props.navigation}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);