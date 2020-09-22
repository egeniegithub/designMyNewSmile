import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import { Icon } from 'native-base';

function SmileDesignWaiting() {
    return (
        <View style={styles.container}>
            {/* <Icon name="funnel" style={styles.iconLoading} /> */}
            <Image 
                style={{width: 100, height: 100}}
                source={require('../../assets/waiting.gif')}
            />
            <Text style={styles.sdWaitingHeading}>SMILE DESIGN UNDER PROCESS,</Text>
            <Text style={styles.sdWaitingHeading}>WE ARE WORKING ON IT</Text>
            <Text style={styles.sdWaitingDetail}>Normally it will take 3-5 days, thanks for your patience</Text>
        </View>
    );
}

export default SmileDesignWaiting;