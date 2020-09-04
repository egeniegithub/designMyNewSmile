import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { CheckBox, } from 'native-base';
import colors from '../../Theme/color';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './style';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from '../../components/ProgressBar';
import BottomBar from '../../components/BottomBar';
import ChooseDesignService from '../../services/ChooseDesignService';
import { alertMessage } from '../../common/functions';

function GetAppointment(props) {
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [noteForDoctor, setNoteForDoctor] = useState('');
    function SingleSimle() {
        return (
            <View style={styles.singleSmileContainer}>
                <View style={styles.textWithCheckBoxContainer}>
                    <CheckBox checked={true} color={colors.Green} style={styles.checkBox} />
                    <Text style={styles.designText}>Design #1</Text>
                </View>
                <Image
                    source={require("../../assets/splash.png")}
                    style={styles.designImage}
                />
            </View>
        )
    }

    function onPressMenuIcon() {
        props.navigation.toggleDrawer()
    }

    async function onPressSendRequest() {
        //    let data = await ChooseDesignService.chooseDesign();
        //    console.log(' < <> > > >  DATA  LOG : ', data);
        alertMessage('Approved!',`${appointmentDate} , ${appointmentTime} , ${noteForDoctor}`, () => {}, '')
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Get Appointment"
                leftIcon="menu"
                onPress={onPressMenuIcon}
            />
            <View style={styles.container}>
                <ProgressBar stepNumber={3} />
                <Text style={styles.heading}>GET THE TREATMENT DONE</Text>
                <View style={styles.singleRowSmileContainer}>
                    <SingleSimle />
                </View>
                <KeyboardAwareScrollView style={{ width: '90%', marginTop: 20 }}>
                    <InputField
                        placeholder="Select Appointment Date"
                        value={appointmentDate}
                        onChangeText={text => setAppointmentDate(text)}
                    />
                    <InputField
                        placeholder="Select Time Slot For Appointment"
                        value={appointmentTime}
                        onChangeText={text => setAppointmentTime(text)}
                    />
                    <InputField
                        placeholder="Send Note To Doctor"
                        value={noteForDoctor}
                        onChangeText={text => setNoteForDoctor(text)}
                    />
                    <CustomButton
                        text={"SEND REQUEST"}
                        style={styles.customButton}
                        onPress={onPressSendRequest}
                    />
                </KeyboardAwareScrollView>

                <BottomBar currentTab={4} />
            </View>
        </View>
    )
}

export default GetAppointment;