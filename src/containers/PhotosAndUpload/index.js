import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from '../../components/ProgressBar';

function PhotosAndUpload(props) {

    const [isFirstImageClickable, setIsFirstImageClickable] = useState(true)
    const [isSecondImageClickable, setIsSecondImageClickable] = useState(false);
    const [isThirdImageClickable, setIsThirdImageClickable] = useState(false);
    const [isForthImageClickable, setIsForthImageClickable] = useState(false);
    const [isFifthImageClickable, setIsFifthImageClickable] = useState(false);
    const [isSixImageClickable, setIsSixImageClickable] = useState(false);

    function firstImageOnPress () {
        if (isFirstImageClickable) {
            setIsSecondImageClickable(true)
            setIsFirstImageClickable(false)
            alert('First Image')
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