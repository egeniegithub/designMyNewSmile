import { StyleSheet } from 'react-native';
import colors from '../../Theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    signUpText: {
        color: colors.SecondryColor,
        fontSize: 18,
        fontWeight: '700'
    },
    customButton: {
        backgroundColor: colors.Green,
        width: '35%',
        marginTop: 30,
        alignSelf: 'center'
    }
})

export default styles;