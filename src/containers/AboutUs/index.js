import React from "react";
import { View, Text } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { WebView } from 'react-native-webview';


function AboutUs(props) {

    function onPressMenu() {
        props.navigation.toggleDrawer();
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="About Us"
                leftIcon="menu"
                onPress={onPressMenu}
            />
            <WebView
                source={{ uri: 'https://leilahariridentalclinic.com/designmysmile/aboutus.php?is_mobile=1' }}
            />
        </View>
    )
}

export default AboutUs;