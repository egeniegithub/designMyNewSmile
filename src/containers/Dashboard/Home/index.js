import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CustomHeader from "../../../components/CustomHeader";

function onPressMenu(navigation) {
    navigation.toggleDrawer();
}

function Home({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Home"
                leftIcon="menu"
                onPress={() => onPressMenu(navigation)}
            />
            <View style={styles.container}>
                <Text>
                    Home Screen
            </Text>
            </View>
        </View>
    )
}

export default Home;