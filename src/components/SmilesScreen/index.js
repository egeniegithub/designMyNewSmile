import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
import { CheckBox, } from 'native-base';
import colors from '../../Theme/color';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction';

function SmilesScreen(props) {
    const { clinic_designs } = props.userObject;
    const [designId, setDesignId] = useState('');
    const [designImage, setDesignImage] = useState('');
    const [firstDesign, setFirstDesign] = useState(false);
    const [secondDesign, setSecondDesign] = useState(false);
    const [thirdDesign, setThirdDesign] = useState(false);
    const [forthDesign, setForthDesign] = useState(false);
    const [fifthDesign, setFifthDesign] = useState(false);
    const [sixthDesign, setSixthDesign] = useState(false);

    function SingleSimle(data) {
        return (
            <View style={styles.singleSmileContainer}>
                <TouchableOpacity
                    onPress={data.setDesign}
                    style={styles.textWithCheckBoxContainer}>
                    <CheckBox checked={data.myCheckBox} onPress={data.setDesign} color={colors.Green} style={styles.checkBox} />
                    <Text style={styles.designText}>{`Design #${data.number}`}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('SmileDesignDetail')}>
                    <Image
                        source={{ uri: data.picture }}
                        style={styles.designImage}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function setCheckBoxDesign(setState) {
        setFirstDesign(false);
        setSecondDesign(false);
        setThirdDesign(false);
        setForthDesign(false);
        setFifthDesign(false);
        setSixthDesign(false);
        setState();
    }

    function setFirstChecboxState() {
        setFirstDesign(!firstDesign)
    }

    function setSecondChecboxState() {
        setSecondDesign(!secondDesign)
    }

    function setThirdChecboxState() {
        setThirdDesign(!thirdDesign)
    }

    function setForthChecboxState() {
        setForthDesign(!forthDesign)
    }

    function setFifthChecboxState() {
        setFifthDesign(!fifthDesign)
    }

    function setSixthChecboxState() {
        setSixthDesign(!sixthDesign)
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>SELECT YOUR SMILE DESIGN</Text>
            <View style={styles.smilesMainContainer}>
                <View style={styles.singleRowSmileContainer}>
                    {
                        clinic_designs && clinic_designs[0] &&
                        <SingleSimle
                            picture={clinic_designs[0].d_aimage}
                            number={1}
                            myCheckBox={firstDesign}
                            setDesign={() => {
                                setCheckBoxDesign(setFirstChecboxState)
                                setDesignId(clinic_designs[0].d_id)
                                setDesignImage(clinic_designs[0].d_aimage)
                            }}
                        />
                    }

                    {
                        clinic_designs && clinic_designs[1] &&
                        <SingleSimle
                            picture={clinic_designs[1].d_aimage}
                            number={2}
                            myCheckBox={secondDesign}
                            setDesign={() => {
                                setCheckBoxDesign(setSecondChecboxState)
                                setDesignId(clinic_designs[1].d_id)
                                setDesignImage(clinic_designs[1].d_aimage)
                            }}
                        />
                    }
                </View>

                {
                    clinic_designs && clinic_designs[2] &&
                    <View style={styles.singleRowSmileContainer}>
                        {
                            clinic_designs && clinic_designs[2] &&
                            <SingleSimle
                                picture={clinic_designs[2].d_aimage}
                                number={3}
                                myCheckBox={thirdDesign}
                                setDesign={() => {
                                    setCheckBoxDesign(setThirdChecboxState)
                                    setDesignId(clinic_designs[2].d_id)
                                    setDesignImage(clinic_designs[2].d_aimage)
                                }}
                            />
                        }
                        {
                            clinic_designs && clinic_designs[3] &&
                            <SingleSimle
                                picture={clinic_designs[3].d_aimage}
                                number={4}
                                myCheckBox={forthDesign}
                                setDesign={() => {
                                    setCheckBoxDesign(setForthChecboxState)
                                    setDesignId(clinic_designs[3].d_id)
                                    setDesignImage(clinic_designs[3].d_aimage)
                                }}
                            />
                        }
                    </View>
                }

                {
                    clinic_designs && clinic_designs[4] &&
                    <View style={styles.singleRowSmileContainer}>
                        {
                            clinic_designs && clinic_designs[4] &&
                            <SingleSimle
                                picture={clinic_designs[4].d_aimage}
                                number={5}
                                myCheckBox={fifthDesign}
                                setDesign={() => {
                                    setCheckBoxDesign(setFifthChecboxState)
                                    setDesignId(clinic_designs[4].d_id)
                                    setDesignImage(clinic_designs[4].d_aimage)
                                }}
                            />
                        }
                        {
                            clinic_designs && clinic_designs[5] &&
                            <SingleSimle
                                picture={clinic_designs[5].d_aimage}
                                number={6}
                                myCheckBox={sixthDesign}
                                setDesign={() => {
                                    setCheckBoxDesign(setSixthChecboxState)
                                    setDesignId(clinic_designs[5].d_id)
                                    setDesignImage(clinic_designs[5].d_aimage)
                                }}
                            />
                        }
                    </View>
                }
                <CustomButton
                    text={"Select Design"}
                    style={styles.customButton}
                    // onPress={() => props.navigation.navigate('GetAppointment')}
                    onPress={() => console.log(`Here are Design @@ @ @ @ @ : ${designId}  :  ${designImage} : `)}
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