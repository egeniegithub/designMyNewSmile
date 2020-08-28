import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from '../../components/ProgressBar';
import ImagePicker from 'react-native-image-picker';
import BottomBar from '../../components/BottomBar';

function PhotosAndUpload(props) {

    const [isFirstImageClickable, setIsFirstImageClickable] = useState(true)
    const [isSecondImageClickable, setIsSecondImageClickable] = useState(false);
    const [isThirdImageClickable, setIsThirdImageClickable] = useState(false);
    const [isForthImageClickable, setIsForthImageClickable] = useState(false);
    const [isFifthImageClickable, setIsFifthImageClickable] = useState(false);
    const [isSixImageClickable, setIsSixImageClickable] = useState(false);
    const [firstImage, setFirstImage] = useState();
    const [secondImage, setSecondImage] = useState();
    const [thirdImage, setThirdImage] = useState();
    const [fourthImage, setFourthImage] = useState();
    const [fifthImage, setFifthImage] = useState();
    const [sixthImage, setSixthImage] = useState();


    const options = {
        title: 'Select Image',
        quality: 0.3
    };

    function getImage(setImage, currentImage, nextImage) {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response From Image Picker :  ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {

                let source = {}
                if (Platform.OS === 'android') {
                    source ={ uri: `data:image/jpeg;base64,${response.data}` }
                } else {
                    source ={ uri: response.uri }
                }
                setImage(source)
                currentImage(false)
                nextImage(true)
            }
        });
    }

    function firstImageOnPress() {
        if (isFirstImageClickable) {
            getImage(setFirstImage, setIsFirstImageClickable,  setIsSecondImageClickable);
        }
    }

    function secondImageOnPress() {
        if (isSecondImageClickable) {
            getImage(setSecondImage, setIsSecondImageClickable,  setIsThirdImageClickable);
        }
    }

    function thirdImageOnPress() {
        if (isThirdImageClickable) {
            getImage(setThirdImage, setIsThirdImageClickable,  setIsForthImageClickable);
        }
    }

    function forthImageOnPress() {
        if (isForthImageClickable) {
            getImage(setFourthImage, setIsForthImageClickable,  setIsFifthImageClickable);
        }
    }

    function fifthImageOnPress() {
        if (isFifthImageClickable) {
            getImage(setFifthImage, setIsFifthImageClickable,  setIsSixImageClickable);
        }
    }

    function sixImageOnPress() {
        if (isSixImageClickable) {
            getImage(setSixthImage, setIsSixImageClickable, setIsFirstImageClickable);
        }
    }

    function onPressMenuIcon () {
        props.navigation.toggleDrawer()
    }

    return (
        <View style={{flex: 1}}>
            <CustomHeader
                title={`Take Photos & Upload`}
                leftIcon="menu"
                onPress={onPressMenuIcon}
            />
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
                    text={"MOVE TO NEXT"}
                    style={styles.customButton}
                    onPress={() => props.navigation.navigate('SmileDesign')}
                />
            </View>
            <BottomBar currentTab={3} />
        </View>
    )
}

export default PhotosAndUpload;