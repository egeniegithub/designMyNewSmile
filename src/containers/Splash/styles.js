import {StyleSheet} from 'react-native';
import colors from '../../Theme/color';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    splashImage: {
        width: '100%',
        height: '65%',
        resizeMode: 'stretch',
        // backgroundColor: colors.PrimaryColor,
    },
    splashBody: {
        alignItems: 'center',
        marginTop: 15,
    },
    splashText: {
        fontSize: 18,
        color: colors.PrimaryColor,
        fontWeight: '800'
    },
    splashDetail: {
        fontSize: 12,
        marginTop: 10,
        color: colors.Grey,
    },
    button: {
        backgroundColor: colors.PrimaryColor,
        paddingVertical: 6,
        paddingHorizontal: 25,
        marginTop: 15,
        borderRadius: 2
    },
    buttonText: {
        color: colors.White,
        fontSize: 16,
        fontWeight: '500'
    },
    copyrightText: {
        marginTop: 25,
        color: colors.Grey,
        fontSize: 7
    },
})

export default styles;