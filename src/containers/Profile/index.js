import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CustomHeader from "../../components/CustomHeader";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';

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
                <KeyboardAwareScrollView style={{ width: '90%', }}>
                    <Text style={styles.profileHeading}>Name</Text>
                    <InputField
                        placeholder="What is your Name?"
                        containerStyle={{ marginTop: 0 }}
                    />
                    <Text style={styles.profileHeading}>Email</Text>
                    <InputField
                        placeholder="What is your Email Address?"
                        containerStyle={{ marginTop: 0 }}
                        disabled={true}
                    />
                    <Text style={styles.profileHeading}>Phone No.</Text>
                    <InputField
                        placeholder="what is your Contact Number?"
                        containerStyle={{ marginTop: 0 }}
                    />
                    <Text style={styles.profileHeading}>Password</Text>
                    <InputField
                        placeholder="Password"
                        containerStyle={{ marginTop: 0 }}
                    />
                    <CustomButton
                        text={"Update Profile"}
                        style={styles.customButton}
                        onPress={() => props.navigation.navigate('SelectTreatment')}
                    />
                </KeyboardAwareScrollView>

            </View>

        </View>
    )
}

export default Profile;