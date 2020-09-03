import React from "react";
import { View, Text } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { WebView } from 'react-native-webview';


function HowItWork(props) {

    function onPressMenu() {
        props.navigation.toggleDrawer();
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="FAQ"
                leftIcon="menu"
                onPress={onPressMenu}
            />
            <WebView
                source={{ uri: 'https://leilahariridentalclinic.com/designmysmile/works.php?is_mobile=1' }}
            />
        </View>
    )
}

export default HowItWork;