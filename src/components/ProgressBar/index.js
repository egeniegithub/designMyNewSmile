import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import colors from '../../Theme/color';

const ProgressBar = props => {

    function CircleHeading(text1, text2, style) {
        return (
            <View style={[styles.circleHeadingTextContainer, style]}>
                <Text style={styles.circleHeadingText}>{text1}</Text>
                <Text style={styles.circleHeadingText}>{text2}</Text>
            </View>
        )
    }

    function Circle(value, style) {
        return (
            <View>
                <View style={[styles.circleContainer, style]}>
                    <Text style={styles.circleText}>{value}</Text>
                </View>
            </View>
        )
    }

    function Bar() {
        return (
            <View style={styles.barContainer} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.CircleHeadingContainer}>
                {CircleHeading('Personal', 'Information', { marginLeft: 20 })}
                {CircleHeading('Select', 'Treatment')}
                {CircleHeading('Take Pictures', '3 to 5')}
            </View>
            <View style={styles.circleBarContainer}>
                {Circle(1, { backgroundColor: props.stepNumber >= 1 ? colors.PrimaryColor : colors.lightGrey })}
                {Bar()}
                {Circle(2, { backgroundColor: props.stepNumber >= 2 ? colors.PrimaryColor : colors.lightGrey })}
                {Bar()}
                {Circle(3, { backgroundColor: props.stepNumber === 3 ? colors.PrimaryColor : colors.lightGrey })}
            </View>
        </View>
    )
}

export default ProgressBar;