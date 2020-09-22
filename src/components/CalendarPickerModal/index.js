import React from 'react';
import { View, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';

const width = Dimensions.get('window').width - 70;
const CalendarPickerModal = props => {
    return (
        <View>
            <Modal isVisible={true} onBackdropPress={props.setIsModalVisible}>
                <View style={{ height: 280, backgroundColor: 'white', padding: 8 }}>
                    <CalendarPicker
                        onDateChange={this.onDateChange}
                        width={width}
                    />
                </View>
            </Modal>
        </View>
    )
}

export default CalendarPickerModal;

