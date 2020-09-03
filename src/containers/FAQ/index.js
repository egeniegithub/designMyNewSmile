import React from "react";
import { View, Text } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { WebView } from 'react-native-webview';


function FAQ(props) {

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
                source={{ uri: 'https://leilahariridentalclinic.com/designmysmile/faq.php?is_mobile=1' }}
            />
        </View>
    )
}

export default FAQ;