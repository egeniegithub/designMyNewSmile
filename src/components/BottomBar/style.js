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
    itemContainer: {
        height: 50,
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerTabContainer: {
        backgroundColor: colors.White,
    }
});

export default styles;