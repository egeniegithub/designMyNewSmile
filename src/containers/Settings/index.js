import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CustomHeader from "../../components/CustomHeader";
import CustomButton from '../../components/CustomButton';

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
                <Text style={styles.deactivateText}>Your account is currently active. Press the button to deactivate</Text>
                <CustomButton
                    text={"Deactivate"}
                    style={styles.customButton}
                    onPress={() => alert('Here,,,')}
                />
            </View>
        </View>
    )
}

export default Settings;