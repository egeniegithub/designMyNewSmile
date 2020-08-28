import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from './style';
import CustomHeader from "../../components/CustomHeader";
import CustomButton from '../../components/CustomButton';



function SmileDesignDetail(props) {

    function onPressMenuIcon() {
        props.navigation.toggleDrawer();
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Design Detail"
                leftIcon="menu"
                onPress={onPressMenuIcon}
            />
            <View >
                <Image
                    source={require("../../assets/splash.png")}
                    style={styles.image}
                />

                <Image
                    source={require("../../assets/pic1.jpeg")}
                    style={[styles.image, {opacity: 0.1}]}
                />
            </View>

        </View >
    )
}

export default SmileDesignDetail;