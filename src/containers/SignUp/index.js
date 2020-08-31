import React from 'react';
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
    function onPressMenu() {
        props.navigation.toggleDrawer();
    }

   async function onPressMoveToNext () {
        // props.navigation.navigate('SelectTreatment')
        // let data = await UserService.signUp('test11', 'mitohi9088@kespear.com', '123456789', '11/10/2020');
        // console.log('Sign Up Response  >< > >> >  : ', data);

        let loginData = await UserService.doLogin('mitohi9088@kespear.com', 'wcg2frmrai');
        console.log('Login Data  < >  : ', loginData);
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Personal Information"
                leftIcon="menu"
                onPress={onPressMenu}
            />
            <View style={styles.container}>
                <ProgressBar stepNumber = {1}/>
                <Text style={styles.signUpText}>SIGNIUP NOW</Text>
                <KeyboardAwareScrollView style={{ width: '90%', }}>
                    <InputField
                        placeholder="What is your Name?"
                    />
                    <InputField
                        placeholder="What is your Email Address?"
                    />
                    <InputField
                        placeholder="what is your Contact Number?"
                    />
                    <InputField
                        placeholder="What is your Date of Birth?"
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