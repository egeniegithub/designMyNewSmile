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
                title="Select Treatment"
                leftIcon="menu"
                onPress={() => { }}
            />
            <View style={styles.container}>
                <ProgressBar stepNumber={2} />
                <View style={styles.HeadingTextContainer}>
                    <Text style={styles.signUpText}>HELP US CUSTOMIZE YOUR</Text>
                    <Text style={styles.signUpText}>TREATMENT OPTIONS</Text>
                </View>
                <View style={{ width: '90%' }}>
                    <InputField
                        placeholder="What is your Name?"
                    />
                    <InputField
                        placeholder="What is your Email Address?"
                    />
                </View>
                <CustomButton
                    text={"MOVE TO NEXT"}
                    style={styles.customButton}
                    onPress={() => alert('k i i i i k')}
                />
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SignUp;