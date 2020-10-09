import { StyleSheet } from 'react-native';
import colors from '../../Theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
         alignItems: 'center',
    },
    customButton: {
        backgroundColor: colors.PrimaryColor,
        width: '40%',
        marginTop: 30,
        alignSelf: 'center'
    },
    signupTextContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    signupText: {
        color: colors.Blue
    }
})

export default styles;