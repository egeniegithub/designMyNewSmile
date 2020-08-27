import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { Icon, Footer, FooterTab, Button} from 'native-base';
import colors from '../../Theme/color';

function BottomBar(props) {
    return (
        <View style={styles.container}>
            <Footer>
                <FooterTab>
                    <View style={styles.itemContainer}>
                        <Icon name="home" style={[styles.icon, { color: props.currentTab === 1 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 1 ? colors.Green : colors.PrimaryColor }]}>Home</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Icon name="person" style={[styles.icon, { color: props.currentTab === 2 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 2 ? colors.Green : colors.PrimaryColor }]}>Profile</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Icon name="camera" style={[styles.icon, { color: props.currentTab === 3 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 3 ? colors.Green : colors.PrimaryColor }]}>Take Photos</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Icon name="card" style={[styles.icon, { color: props.currentTab === 4 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 4 ? colors.Green : colors.PrimaryColor }]}>Simple Design</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Icon name="send" style={[styles.icon, { color: props.currentTab === 5 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 5 ? colors.Green : colors.PrimaryColor }]}>Contact</Text>
                    </View>
                </FooterTab>
            </Footer>
        </View>
    )
}

export default BottomBar;