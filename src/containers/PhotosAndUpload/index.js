import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, ScrollView, Linking } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from '../../components/ProgressBar';
import ImagePicker from 'react-native-image-picker';
import BottomBar from '../../components/BottomBar';
import TreatmentService from '../../services/TreatmentService';
import { connect } from 'react-redux';
import { alertMessage } from '../../common/functions';
import { actions } from '../../redux/actions/UserAction'
import Modal from 'react-native-modal';
import {
    firstImageInstructions,
    secondImageInstructions,
    thirdImageInstructions,
    forthImageInstructions,
    fifthImageInstructions,
    sixthImageInstructions
} from '../../common/values';

function PhotosAndUpload(props) {

    const [isFirstImageClickable, setIsFirstImageClickable] = useState(true)
    const [isSecondImageClickable, setIsSecondImageClickable] = useState(false);
    const [isThirdImageClickable, setIsThirdImageClickable] = useState(false);
    const [isForthImageClickable, setIsForthImageClickable] = useState(false);
    const [isFifthImageClickable, setIsFifthImageClickable] = useState(false);
    const [isSixImageClickable, setIsSixImageClickable] = useState(false);
    const [firstImage, setFirstImage] = useState('');
    const [secondImage, setSecondImage] = useState('');
    const [thirdImage, setThirdImage] = useState('');
    const [fourthImage, setFourthImage] = useState('');
    const [fifthImage, setFifthImage] = useState('');
    const [sixthImage, setSixthImage] = useState('');
    const [firstImageBase, setFirstImageBase] = useState('');
    const [secondImageBase, setSecondImageBase] = useState('');
    const [thirdImageBase, setThirdImageBase] = useState('');
    const [fourthImageBase, setFourthImageBase] = useState('');
    const [fifthImageBase, setFifthImageBase] = useState('');
    const [sixthImageBase, setSixthImageBase] = useState('');
    const [spinnerOnButton, setSpinnerOnButton] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [imgaeInstructions, setImageInstructions] = useState('');


    const options = {
        title: 'Select Image',
        quality: 0.3
    };

    function getImage(setImage, currentImage, nextImage, setImageBase) {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response From Image Picker :  ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {

                let source = {}
                if (Platform.OS === 'android') {
                    source = { uri: `data:image/jpeg;base64,${response.data}` }
                } else {
                    source = { uri: response.uri }
                }
                setIsModalVisible(false)
                setImage(source)
                currentImage(false)
                nextImage(true)
                setImageBase(response.data)
            }
        });
    }

    function firstImageOnPress() {
        if (isFirstImageClickable) {
            setImageInstructions(firstImageInstructions);
            setIsModalVisible(true)
        }
    }

    function secondImageOnPress() {
        if (isSecondImageClickable) {
            setImageInstructions(secondImageInstructions);
            setIsModalVisible(true)
        }
    }

    function thirdImageOnPress() {
        if (isThirdImageClickable) {
            setImageInstructions(thirdImageInstructions);
            setIsModalVisible(true)
        }
    }

    function forthImageOnPress() {
        if (isForthImageClickable) {
            setImageInstructions(forthImageInstructions);
            setIsModalVisible(true)
        }
    }

    function fifthImageOnPress() {
        if (isFifthImageClickable) {
            setImageInstructions(fifthImageInstructions);
            setIsModalVisible(true)
        }
    }

    function sixImageOnPress() {
        if (isSixImageClickable) {
            setImageInstructions(sixthImageInstructions);
            setIsModalVisible(true)
        }
    }

    function onPressMenuIcon() {
        props.navigation.toggleDrawer()
    }

    async function onPressMoveToNext() {
        // props.navigation.navigate('SmileDesign')
        setSpinnerOnButton(true);
        let { treatment, question1, question2 } = props.route.params;
        if (!question1) {
            question1 = 'NAN';
        }
        if (!question2) {
            question2 = 'NAN';
        }
        let imagesArray = [firstImageBase, secondImageBase, thirdImageBase, fourthImageBase, fifthImageBase, sixthImageBase];
        if (fourthImage) {
            let data = await props.setTreatment(treatment, question1, question2, imagesArray);
            if (!data.error) {
                setSpinnerOnButton(false)
                props.navigation.navigate('SmileDesign');
            } else {
                alertMessage('Error!', data.message,
                    () => { setSpinnerOnButton(false) },
                    ''
                );
            }
        } else {
            alertMessage('Empty Field!', 'Please upload atleast 4 images.',
                () => { setSpinnerOnButton(false) },
                ''
            );
        }
    }

    function onPressModalImageButton() {
        if (isFirstImageClickable) {
            getImage(setFirstImage, setIsFirstImageClickable, setIsSecondImageClickable, setFirstImageBase);
        } else if (isSecondImageClickable) {
            getImage(setSecondImage, setIsSecondImageClickable, setIsThirdImageClickable, setSecondImageBase);
        } else if (isThirdImageClickable) {
            getImage(setThirdImage, setIsThirdImageClickable, setIsForthImageClickable, setThirdImageBase);
        } else if (isForthImageClickable) {
            getImage(setFourthImage, setIsForthImageClickable, setIsFifthImageClickable, setFourthImageBase);
        } else if (isFifthImageClickable) {
            getImage(setFifthImage, setIsFifthImageClickable, setIsSixImageClickable, setFifthImageBase);
        } else if (isSixImageClickable) {
            getImage(setSixthImage, setIsSixImageClickable, setIsFirstImageClickable, setSixthImageBase);
        }
    }

    function ShowDetailModal() {
        return (
            <Modal isVisible={isModalVisible}>
                <View style={{ height: "60%", backgroundColor: 'white', padding: 8 }}>
                    {/* <ScrollView>
                        <Text style={styles.modalText}>
                            {imgaeInstructions}
                        </Text>
                    </ScrollView> */}
                    {
                        isFirstImageClickable && <Image
                            source={require('../../assets/instruction1.png')}
                            style={{ width: "100%", height: "75%", resizeMode: "contain" }}
                        />
                    }

                    {
                        isSecondImageClickable && <Image
                            source={require('../../assets/instruction2.png')}
                            style={{ width: "100%", height: "85%", resizeMode: "contain" }}
                        />
                    }

                    {
                        isThirdImageClickable && <Image
                            source={require('../../assets/instruction3.png')}
                            style={{ width: "100%", height: "85%", resizeMode: "contain" }}
                        />
                    }

                    {
                        isForthImageClickable && <Image
                            source={require('../../assets/instruction4.png')}
                            style={{ width: "100%", height: "85%", resizeMode: "contain" }}
                        />
                    }

                    {
                        isFifthImageClickable && <Image
                            source={require('../../assets/instruction5.png')}
                            style={{ width: "100%", height: "85%", resizeMode: "contain" }}
                        />
                    }

                    {
                        isSixImageClickable && <Image
                            source={require('../../assets/instruction6.png')}
                            style={{ width: "100%", height: "85%", resizeMode: "contain" }}
                        />
                    }

                    <View style={styles.modalFooter}>
                        <CustomButton
                            text={"Video Toturial"}
                            style={styles.videoTutorialButton}
                            onPress={() => {
                                Linking.openURL('https://www.youtube.com/watch?v=glP78Bp-rdE&feature=youtu.be')
                                    .catch(err => {
                                    })
                            }}
                        />
                        <View style={styles.footerDivider} />
                        <View style={styles.modalFooterRow}>
                            <CustomButton
                                text={"Cancel"}
                                style={styles.modalButtonCancel}
                                onPress={() => setIsModalVisible(false)}
                            />
                            <CustomButton
                                text={"Select Image"}
                                style={[styles.modalButtonImage, { width: '39%' }]}
                                onPress={onPressModalImageButton}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title={`Take Photos & Upload`}
                leftIcon="menu"
                onPress={onPressMenuIcon}
            />
            <ShowDetailModal />
            <View style={styles.container}>
                <ProgressBar stepNumber={3} />
                <View style={styles.HeadingTextContainer}>
                    <Text style={styles.HeadingText}>TAKE PHOTOS OF YOUR</Text>
                    <Text style={styles.HeadingText}>TEETH AND UPLOAD</Text>
                </View>

                <View style={styles.imagesContainer}>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={firstImageOnPress}>
                        {firstImage ?
                            <Image
                                source={firstImage}
                                style={styles.uploadImage}
                            />
                            :
                            <Image
                                source={require('../../assets/upload.png')}
                                style={styles.uploadImage}
                            />
                        }

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={secondImageOnPress}>
                        {secondImage ?
                            <Image
                                source={secondImage}
                                style={styles.uploadImage}
                            />
                            :
                            <Image
                                source={require('../../assets/upload.png')}
                                style={styles.uploadImage}
                            />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={thirdImageOnPress}>
                        {thirdImage ?
                            <Image
                                source={thirdImage}
                                style={styles.uploadImage}
                            />
                            :
                            <Image
                                source={require('../../assets/upload.png')}
                                style={styles.uploadImage}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.imagesContainer}>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={forthImageOnPress}>
                        {fourthImage ?
                            <Image
                                source={fourthImage}
                                style={styles.uploadImage}
                            />
                            :
                            <Image
                                source={require('../../assets/upload.png')}
                                style={styles.uploadImage}
                            />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={fifthImageOnPress}>
                        {fifthImage ?
                            <Image
                                source={fifthImage}
                                style={styles.uploadImage}
                            />
                            :
                            <Image
                                source={require('../../assets/upload.png')}
                                style={styles.uploadImage}
                            />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={sixImageOnPress}>
                        {sixthImage ?
                            <Image
                                source={sixthImage}
                                style={styles.uploadImage}
                            />
                            :
                            <Image
                                source={require('../../assets/upload.png')}
                                style={styles.uploadImage}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <CustomButton
                    text={"Upload"}
                    style={styles.customButton}
                    onPress={!spinnerOnButton ? onPressMoveToNext : () => { }}
                    customButtonClick={spinnerOnButton}
                />
            </View>
            <BottomBar currentTab={3} token={props.token} navigation={props.navigation} currentScreen={'SelectTreatment'}/>
        </View>
    )
}

const mapStateToProps = state => ({
    userObject: state.user.userObject,
    token: state.user.token,
});

const mapDispatchToProps = dispatch => {
    return {
        setTreatment: (treatment, question1, question2, imagesArray) => dispatch(actions.setTreatment(treatment, question1, question2, imagesArray)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosAndUpload);