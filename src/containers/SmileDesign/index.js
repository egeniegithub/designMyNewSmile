import React from 'react';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '../../components/CustomHeader';
import SmileDesignWaiting from '../../components/SmileDesignWaiting';
import { View } from 'native-base';

function SmileDesign () {

    return (
        <View style={{flex: 1}}>
            <CustomHeader
                title={`Smile Design`}
                leftIcon="menu"
                onPress={() => { }}
            />
            <SmileDesignWaiting />
        </View>
    )
}
export default SmileDesign;