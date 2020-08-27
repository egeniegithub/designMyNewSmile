import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { Icon, Footer, FooterTab, Button } from 'native-base';

function BottomBar() {
    return (
        <View style={styles.container}>
            <Footer >
                <FooterTab >
                    <Button vertical active>
                        <Icon name="apps" style={styles.icon} />
                        <Text style={styles.textStyle}>Home</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="apps" style={styles.icon} />
                        <Text style={styles.textStyle}>Home</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="apps" style={styles.icon} />
                        <Text style={styles.textStyle}>Home</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="apps" style={styles.icon} />
                        <Text style={styles.textStyle}>Home</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="apps" style={styles.icon} />
                        <Text style={styles.textStyle}>Home</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </View>
    )
}

export default BottomBar;