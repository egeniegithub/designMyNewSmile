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
import { connect } from 'react-redux';
import CalendarPickerModal from '../../components/CalendarPickerModal';
import moment from 'moment';
import TimeSlotPicker from '../../components/TimeSlotPicker';

function GetAppointment(props) {
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [noteForDoctor, setNoteForDoctor] = useState('');
    const [spinnerOnButton, setSpinnerOnButton] = useState(false);
    const [showDOBCalendar, setShowDOBCalendar] = useState(false)
    function SingleSimle() {
        const { designImage } = props.route.params;
        return (
            <View style={styles.singleSmileContainer}>
                <View style={styles.textWithCheckBoxContainer}>
                    <CheckBox checked={true} color={colors.Green} style={styles.checkBox} />
                    <Text style={styles.designText}>Selected Design</Text>
                </View>
                <Image
                    source={{ uri: designImage }}
                    style={styles.designImage}
                />
            </View>
        )
    }

    function onPressMenuIcon() {
        props.navigation.toggleDrawer()
    }

    async function onPressSendRequest() {
        const { designId, clinicEmail } = props.route.params;
        setSpinnerOnButton(true)
        let data = await ChooseDesignService.chooseDesign(designId, appointmentDate, appointmentTime, noteForDoctor, clinicEmail);
        if (data.status >= 200 && data.status <= 299) {
            alertMessage('Approved!', 'You will get email soon.', () => {
                setSpinnerOnButton(false)
            }, '')
        } else {
            alertMessage('Error!', data.message, () => {
                setSpinnerOnButton(false)
            }, '')
        }
    }

    function dateChange(date) {
        setShowDOBCalendar(false);
        setAppointmentDate(moment(date).format('YYYY/MM/DD'))
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Get Appointment"
                leftIcon="menu"
                onPress={onPressMenuIcon}
            />
            <View style={styles.container}>
                {showDOBCalendar && <CalendarPickerModal
                    isModalVisible={showDOBCalendar}
                    setIsModalVisible={() => setShowDOBCalendar(false)}
                    dateChanage={dateChange}
                />}
                <Text style={styles.heading}>GET THE TREATMENT DONE</Text>
                <View style={styles.singleRowSmileContainer}>
                    <SingleSimle />
                </View>
                <KeyboardAwareScrollView style={{ width: '90%', marginTop: 20 }}>
                    <InputField
                        placeholder="Appointment Date"
                        value={appointmentDate}
                        disabled={true}
                        rightIcon={'calendar'}
                        onPressRightIcon={() => setShowDOBCalendar(true)}
                        pointerEvents={'none'}
                        onPressInputField={() => setShowDOBCalendar(true)}
                    />
                    <InputField
                        placeholder="Time Slot For Appointment"
                        value={appointmentTime}
                        disabled={true}
                        rightTimeMenu={<TimeSlotPicker
                            selectedTime={(text) => { setAppointmentTime(text) }}
                        />}
                        pointerEvents={'none'}
                    />
                    <InputField
                        placeholder="Note To Doctor"
                        value={noteForDoctor}
                        onChangeText={text => setNoteForDoctor(text)}
                    />
                    <CustomButton
                        text={"SEND REQUEST"}
                        style={styles.customButton}
                        onPress={!spinnerOnButton ? onPressSendRequest : () => { }}
                        customButtonClick={spinnerOnButton}
                    />
                </KeyboardAwareScrollView>

                <BottomBar currentTab={5} token={props.token} navigation={props.navigation} />
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

export default connect(mapStateToProps)(GetAppointment);