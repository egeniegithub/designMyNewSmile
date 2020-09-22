import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../Theme/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.waitingScreenColor
    },
    iconLoading: {
        width: 30,
        height: 30,
        color: colors.Grey,
        marginVertical: 15,
    },
    sdWaitingHeading: {
        color: colors.Grey,
        fontSize: 18,
        fontWeight: '700',
        marginVertical: 2
    },
    sdWaitingDetail: {
        color: colors.Grey,
        fontSize: 10,
        marginTop: 15,
        fontWeight: '500'
    },
});

export default styles;