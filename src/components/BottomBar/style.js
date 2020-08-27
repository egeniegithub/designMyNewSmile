import { StyleSheet } from 'react-native';
import colors from '../../Theme/color';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    textStyle: {
        fontSize: 9,
        fontWeight: '500'
    },
    icon: {
        color: colors.PrimaryColor
    },
});

export default styles;