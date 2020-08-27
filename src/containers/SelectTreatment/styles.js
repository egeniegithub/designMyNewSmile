import { StyleSheet } from 'react-native';
import colors from '../../Theme/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    HeadingTextContainer: {
        alignItems: 'center',
    },
    signUpText: {
        color: colors.SecondryColor,
        fontSize: 18,
        fontWeight: '700'
    },
    customButton: {
        backgroundColor: colors.Green,
        width: '40%',
        marginTop: 30,
        alignSelf: 'center'
    },
    questionText: {
        marginVertical: 25,

    }
})

export default styles;