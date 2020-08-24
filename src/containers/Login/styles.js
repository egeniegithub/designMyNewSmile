import { StyleSheet } from 'react-native';
import * as colors from '../../Theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButton: {
        backgroundColor: colors.Green,
        width: '80%',
        marginTop: 15
    },
    signupTextContainer:{
        flexDirection: 'row',
        marginTop: 8
    },
    signupText: {
        color: colors.Blue
    }
})

export default styles;