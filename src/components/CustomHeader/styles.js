import { StyleSheet } from 'react-native';
import colors from '../../Theme/colors';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.PrimaryColor
    },
    title: {
        color: colors.White
    },
    icon: {
        color: colors.White
    },
    body: {
        flex: 3,
        marginLeft: Platform.OS === 'android' ? 10 : 0,
    }
})

export default styles;