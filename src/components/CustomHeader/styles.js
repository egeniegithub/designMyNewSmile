import { StyleSheet } from 'react-native';
import colors from '../../Theme/color';

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
        flex: 3
    }
})

export default styles;