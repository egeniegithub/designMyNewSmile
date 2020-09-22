import React, { useEffect } from 'react';
import styles from './styles';
import CustomHeader from '../../components/CustomHeader';
import SmileDesignWaiting from '../../components/SmileDesignWaiting';
import { View } from 'native-base';
import BottomBar from '../../components/BottomBar';
import SmilesScreen from '../../components/SmilesScreen';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction';

function SmileDesign(props) {
    const {clinic_designs} = props.userObject;

    function onPressMenuIcon() {
        props.navigation.toggleDrawer()
    }

    useEffect(() => {
        props.getProfile();
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title={`Smile Design`}
                leftIcon="menu"
                onPress={onPressMenuIcon}
            />
            { clinic_designs && clinic_designs.length !== 0 ?
                <SmilesScreen navigation={props.navigation} />
                :
                <SmileDesignWaiting />
            }
            <BottomBar currentTab={4} userObject={props.userObject} navigation={props.navigation}/>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        userObject: state.user.userObject,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfile: () => dispatch(actions.getProfile()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmileDesign);