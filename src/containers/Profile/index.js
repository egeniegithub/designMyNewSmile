import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CustomHeader from "../../components/CustomHeader";

function onPressMenu(navigation) {
    navigation.toggleDrawer();
}

function Profile({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Profile"
                leftIcon="menu"
                onPress={() => onPressMenu(navigation)}
            />
            <View style={styles.container}>
                <Text>
                    Profile Screen
            </Text>
            </View>
        </View>
    )
}

export default Profile;