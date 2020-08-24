import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CustomHeader from "../../components/CustomHeader";

function onPressMenu(navigation) {
    navigation.toggleDrawer();
}

function Settings({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Settings"
                leftIcon="menu"
                onPress={() => onPressMenu(navigation)}
            />
            <View style={styles.container}>
                <Text>
                    Settings Screen
            </Text>
            </View>
        </View>
    )
}

export default Settings;