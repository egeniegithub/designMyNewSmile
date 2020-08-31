import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from './../../components/ProgressBar';
import BottomBar from '../../components/BottomBar';
import UserService from '../../services/UserService';

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
            alert('please fill all fields..')
        } else {
            let data = await UserService.signUp(name, email, phoneNo, dob);
            console.log('Sign Up Response  >< > >> >  : ', data);
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

export default SignUp;