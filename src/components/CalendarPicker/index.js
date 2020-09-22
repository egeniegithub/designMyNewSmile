import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';

const CalendarPicker = props => {
    return (
        <View>
            <Modal isVisible={true} onBackdropPress = {props.setIsModalVisible}>
                <View style={{ height: "50%", backgroundColor: 'white', padding: 8 }}>
                    <Text>Show Calendar here</Text>
                </View>
            </Modal>
        </View>
    )
}

export default CalendarPicker;

