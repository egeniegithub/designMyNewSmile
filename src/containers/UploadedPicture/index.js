import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from './style';
import CustomHeader from "../../components/CustomHeader";
import CustomButton from '../../components/CustomButton';



function UploadedPictures(props) {

    function onPressMenuIcon() {
        props.navigation.toggleDrawer();
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Uploaded Pictures"
                leftIcon="menu"
                onPress={onPressMenuIcon}
            />

            <ScrollView>
                <Image
                    source={require("../../assets/splash.png")}
                    style={styles.image}
                />
                
                <Image
                    source={require("../../assets/splash.png")}
                    style={styles.image}
                />

            </ScrollView>

        </View >
    )
}

export default UploadedPictures;