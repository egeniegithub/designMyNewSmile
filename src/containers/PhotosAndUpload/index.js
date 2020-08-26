import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from '../../components/ProgressBar';

function PhotosAndUpload(props) {

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
                        onPress={() => alert('jajaj aj a')}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={() => alert('jajaj aj a')}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={() => alert('jajaj aj a')}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.imagesContainer}>
                <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={() => alert('jajaj aj a')}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={() => alert('jajaj aj a')}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.imageButtonStyle}
                        onPress={() => alert('jajaj aj a')}>
                        <Image
                            source={require('../../assets/upload.png')}
                            style={styles.uploadImage}
                        />
                    </TouchableOpacity>
                </View> */}

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