import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CustomHeader from "../../../components/CustomHeader";


function onPressMenu(navigation) {
    navigation.toggleDrawer();
}

function Detail({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Details"
                leftIcon="menu"
                onPress={() => onPressMenu(navigation)}
            />
            <View style={styles.container}>
                <Text>
                    Detail Screen
            </Text>
            </View>
        </View>
    )
}

export default Detail;