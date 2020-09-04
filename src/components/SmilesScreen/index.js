import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style';
import { CheckBox, } from 'native-base';
import colors from '../../Theme/color';
import CustomButton from '../CustomButton';

function SmilesScreen(props) {

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
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>SELECT YOUR SMILE DESIGN</Text>
            <View style={styles.smilesMainContainer}>
                <View style={styles.singleRowSmileContainer}>
                    <SingleSimle />
                    <SingleSimle />
                </View>

                <View style={styles.singleRowSmileContainer}>
                    <SingleSimle />
                    <SingleSimle />
                </View>

                <View style={styles.singleRowSmileContainer}>
                    <SingleSimle />
                    <SingleSimle />
                </View>
            </View>
            <CustomButton
                text={"Select Design"}
                style={styles.customButton}
                onPress={() => props.navigation.navigate('GetAppointment')}
            />
        </ScrollView>
    );
}

export default SmilesScreen;