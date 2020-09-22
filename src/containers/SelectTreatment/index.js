import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from './../../components/ProgressBar';
import RadioForm from 'react-native-simple-radio-button';
import colors from '../../Theme/color';
import BottomBar from '../../components/BottomBar';
import { connect } from 'react-redux';

function SelectTreatment(props) {
    const [radioButtonText, setRadioButtonText] = useState('Ceramic Veneers')
    const [radioButtonValue, setRadioButtonValue] = useState(0);
    const [veneersTreatment, setVeneersTreatment] = useState('');
    const [concernAboutTreatment, setConcernAboutTreatment] = useState('');
    const radio_props = [
        { label: 'Ceramic Veneers', value: 0 },
        { label: 'Crowns', value: 1 },
        { label: 'Laminates', value: 2 },
        { label: 'Doctor Recommendation', value: 3 },
    ];

    useEffect(() => {
        SetRadioButtonText()
    }, [radioButtonValue])

    function SetRadioButtonText() {
        switch (radioButtonValue) {
            case 1:
                setRadioButtonText('Crowns');
                break;
            case 2:
                setRadioButtonText('Laminates');
                break;
            case 3:
                setRadioButtonText('Doctor Recommendation');
                break;
            default:
                setRadioButtonText('Ceramic Veneers');
        }
    }

    function onPressMenuIcon() {
        props.navigation.toggleDrawer()
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Select Treatment"
                leftIcon="menu"
                onPress={onPressMenuIcon}
            />
            <View style={styles.container}>
                <ProgressBar stepNumber={2} />
                <View style={styles.HeadingTextContainer}>
                    <Text style={styles.signUpText}>HELP US CUSTOMIZE YOUR</Text>
                    <Text style={styles.signUpText}>TREATMENT OPTIONS</Text>
                </View>
                <KeyboardAwareScrollView style={{ width: '90%', }}>
                    <Text style={styles.questionText}>First, which treatment interests you?</Text>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        buttonColor={colors.PrimaryColor}
                        buttonSize={10}
                        style={{ marginBottom: 10 }}
                        selectedButtonColor={colors.PrimaryColor}
                        animation={true}
                        onPress={(value) => {
                            setRadioButtonValue(value)
                        }}
                    />
                    <InputField
                        placeholder="Have you done any veneers treatment before?"
                        value={veneersTreatment}
                        onChangeText={value => { setVeneersTreatment(value) }}

                    />
                    <InputField
                        placeholder="Your main concern to get the veneer Treament?"
                        value={concernAboutTreatment}
                        onChangeText={value => { setConcernAboutTreatment(value) }}
                    />
                    <CustomButton
                        text={"MOVE TO NEXT"}
                        style={styles.customButton}
                        onPress={() => props.navigation.navigate('PhotosAndUpload', {
                            treatment: radioButtonText,
                            question1: veneersTreatment,
                            question2: concernAboutTreatment,
                        })}
                    />
                </KeyboardAwareScrollView>

                <BottomBar currentTab={2} token={props.token} navigation={props.navigation}/>
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        token: state.user.token,
    };
};


export default connect(mapStateToProps)(SelectTreatment);