import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from '../../components/ProgressBar';
import ImagePicker from 'react-native-image-picker';

function PhotosAndUpload(props) {

    const [isFirstImageClickable, setIsFirstImageClickable] = useState(true)
    const [isSecondImageClickable, setIsSecondImageClickable] = useState(false);
    const [isThirdImageClickable, setIsThirdImageClickable] = useState(false);
    const [isForthImageClickable, setIsForthImageClickable] = useState(false);
    const [isFifthImageClickable, setIsFifthImageClickable] = useState(false);
    const [isSixImageClickable, setIsSixImageClickable] = useState(false);

    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

    function firstImageOnPress () {
        if (isFirstImageClickable) {
            setIsSecondImageClickable(true)
            setIsFirstImageClickable(false)
            ImagePicker.showImagePicker(options, (response) => {
                console.log('Response From Image Picker :  ', response);
              
                if (response.didCancel) {
                  console.log('User cancelled image picker');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                  console.log('User tapped custom button: ', response.customButton);
                } else {
                  const source = { uri: response.uri };
              
                  // You can also display the image using data:
                  // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                }
              });
        }
    }

    function secondImageOnPress () {
        if (isSecondImageClickable) {
            setIsThirdImageClickable(true)
            setIsSecondImageClickable(false)
            alert('Second Image')
        }
    }

    function thirdImageOnPress () {
        if (isThirdImageClickable) {
            setIsThirdImageClickable(false)
            setIsForthImageClickable(true)
            alert('Third Image')
        }
    }

    function forthImageOnPress () {
        if (isForthImageClickable) {
            setIsForthImageClickable(false)
            setIsFifthImageClickable(true)
            alert('Fourth Image')
        }
    }

    function fifthImageOnPress () {
        if (isFifthImageClickable) {
            setIsFifthImageClickable(false)
            setIsSixImageClickable(true)
            alert('Five Image')
        }
    }

    function sixImageOnPress () {
        if (isSixImageClickable) {
            setIsSixImageClickable(false)
            alert('Six Image')
        }
    }

    return (
        <KeyboardAwareScrollView>
            <CustomHeader
                title={`Take Photos & Upload`}
                leftIcon="menu"
                onPress={() => { }}
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
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={secondImageOnPress}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={thirdImageOnPress}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.imagesContainer}>
                <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={forthImageOnPress}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={fifthImageOnPress}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={sixImageOnPress}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                </View>

                <CustomButton
                    text={"MOVE TO NEXT"}
                    style={styles.customButton}
                    onPress={() => alert(concernAboutTreatment)}
                />
            </View>
        </KeyboardAwareScrollView>
    )
}

export default PhotosAndUpload;