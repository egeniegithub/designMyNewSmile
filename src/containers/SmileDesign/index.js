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
            {/* <SmileDesignWaiting /> */}
            <SmilesScreen navigation={props.navigation} />
            <BottomBar currentTab={4} />
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