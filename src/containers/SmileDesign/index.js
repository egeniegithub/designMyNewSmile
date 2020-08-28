import React from 'react';
import styles from './styles';
import CustomHeader from '../../components/CustomHeader';
import SmileDesignWaiting from '../../components/SmileDesignWaiting';
import { View } from 'native-base';
import BottomBar from '../../components/BottomBar';
import SmilesScreen from '../../components/SmilesScreen';

function SmileDesign (props) {

    function onPressMenuIcon () {
        props.navigation.toggleDrawer()
    }

    return (
        <View style={{flex: 1}}>
            <CustomHeader
                title={`Smile Design`}
                leftIcon="menu"
                onPress={onPressMenuIcon}
            />
            {/* <SmileDesignWaiting /> */}
            <SmilesScreen navigation = {props.navigation}/>
            <BottomBar currentTab={4} />
        </View>
    )
}
export default SmileDesign;