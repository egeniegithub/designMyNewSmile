import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style';
import { CheckBox, } from 'native-base';
import colors from '../../Theme/color';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SmilesScreen(props) {
    const { clinic_designs } = props.userObject;

    function SingleSimle(data) {
        return (
            <View style={styles.singleSmileContainer}>
                <View style={styles.textWithCheckBoxContainer}>
                    <CheckBox checked={true} color={colors.Green} style={styles.checkBox} />
                    <Text style={styles.designText}>{`Design #${data.number}`}</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('SmileDesignDetail')}>
                    <Image
                        source={{ uri: data.picture }}
                        style={styles.designImage}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>SELECT YOUR SMILE DESIGN</Text>
            <View style={styles.smilesMainContainer}>
                <View style={styles.singleRowSmileContainer}>
                    {
                        clinic_designs && clinic_designs[0] &&
                        <SingleSimle picture={clinic_designs[0].d_aimage} number={1} />
                    }

                    {
                        clinic_designs && clinic_designs[1] &&
                        <SingleSimle picture={clinic_designs[1].d_aimage} number={2} />
                    }
                </View>

                {
                    clinic_designs && clinic_designs[2] &&
                    <View style={styles.singleRowSmileContainer}>
                        {
                           clinic_designs && clinic_designs[2] &&
                            <SingleSimle picture={clinic_designs[2].d_aimage} number={3} />
                        }
                        {
                            clinic_designs && clinic_designs[3] &&
                            <SingleSimle picture={clinic_designs[3].d_aimage} number={4} />
                        }
                    </View>
                }

                {
                    clinic_designs && clinic_designs[4] &&
                    <View style={styles.singleRowSmileContainer}>
                        {
                            clinic_designs && clinic_designs[4] &&
                            <SingleSimle picture={clinic_designs[4].d_aimage} number={5} />
                        }
                        {
                            clinic_designs && clinic_designs[5] &&
                            <SingleSimle picture={clinic_designs[5].d_aimage} number={6} />
                        }
                    </View>
                }
                <CustomButton
                    text={"Select Design"}
                    style={styles.customButton}
                    onPress={() => props.navigation.navigate('GetAppointment')}
                />
            </View>

        </ScrollView>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(SmilesScreen);