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
                    <Button vertical >
                        <Icon name="home" style={[styles.icon, { color: props.currentTab === 1 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 1 ? colors.Green : colors.PrimaryColor }]}>Home</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" style={[styles.icon, { color: props.currentTab === 2 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 2 ? colors.Green : colors.PrimaryColor }]}>Profile</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="camera" style={[styles.icon, { color: props.currentTab === 3 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 3 ? colors.Green : colors.PrimaryColor }]}>Take Photos</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="card" style={[styles.icon, { color: props.currentTab === 4 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 4 ? colors.Green : colors.PrimaryColor }]}>Simple Design</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="send" style={[styles.icon, { color: props.currentTab === 5 ? colors.Green : colors.PrimaryColor }]} />
                        <Text style={[styles.textStyle, { color: props.currentTab === 5 ? colors.Green : colors.PrimaryColor }]}>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </View>
    )
}

export default BottomBar;