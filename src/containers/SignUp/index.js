import React from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from './../../components/ProgressBar';

function SignUp(props) {
    return (
        <KeyboardAwareScrollView>
            <CustomHeader
                title="Personal Information"
                leftIcon="menu"
                onPress={() => {}}
            />
            <View style={styles.container}>
                <ProgressBar />
                <Text style={styles.signUpText}>SIGNIUP NOW</Text>
                <View style={{ width: '90%' }}>
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
                </View>
                <CustomButton
                    text={"MOVE TO NEXT"}
                    style={styles.customButton}
                />
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SignUp;