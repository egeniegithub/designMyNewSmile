import React from 'react';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '../../components/CustomHeader';

function SmileDesign () {

    return (
        <KeyboardAwareScrollView>
            <CustomHeader
                title={`Smile Design`}
                leftIcon="menu"
                onPress={() => { }}
            />
        </KeyboardAwareScrollView>
    )
}
export default SmileDesign;