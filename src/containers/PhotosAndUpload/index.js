import React from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import ProgressBar from '../../components/ProgressBar';

function PhotosAndUpload (props) {
    
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