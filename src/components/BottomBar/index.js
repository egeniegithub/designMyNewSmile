import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import { Icon, Footer, FooterTab, Button } from 'native-base';
import colors from '../../Theme/colors';
import { CommonActions } from '@react-navigation/native';

function BottomBar(props) {
    function resetStack(name) {
        props.navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: name },
                ],
            })
        );
    }
    return (
        <View style={styles.container}>
            <Footer>
                <FooterTab style={styles.footerTabContainer}>
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => props.token && props.currentScreen !== 'UploadedPictures' && resetStack('UploadedPictures')}
                    >
                        <Icon name="home" style={[styles.icon, { color: props.currentTab === 1 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 1 ? colors.Green : colors.PrimaryColor }]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => props.token && props.currentScreen !== 'Profile' && resetStack('Profile')}
                    >
                        <Icon name="person" style={[styles.icon, { color: props.currentTab === 2 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 2 ? colors.Green : colors.PrimaryColor }]}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => props.token && props.currentScreen !== 'SelectTreatment' && resetStack('SelectTreatment')}
                    >
                        <Icon name="camera" style={[styles.icon, { color: props.currentTab === 3 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 3 ? colors.Green : colors.PrimaryColor }]}>Take Photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => props.token && props.currentScreen !== 'SmileDesign' && resetStack('SmileDesign')}
                    >
                        <Icon name="card" style={[styles.icon, { color: props.currentTab === 4 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 4 ? colors.Green : colors.PrimaryColor }]}>Smile Design</Text>
                    </TouchableOpacity>
                    <View style={styles.itemContainer}>
                        <Icon name="paper-plane" style={[styles.icon, { color: props.currentTab === 5 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 5 ? colors.Green : colors.PrimaryColor }]}>Contact</Text>
                    </View>
                </FooterTab>
            </Footer>
        </View>
    )
}

export default BottomBar;