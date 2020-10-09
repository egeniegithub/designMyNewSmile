import { StyleSheet } from 'react-native';
import colors from '../../Theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center'
    },
    customButton: {
        backgroundColor: colors.Green,
        width: '40%',
        marginTop: 30,
        alignSelf: 'center'
    },
    profileHeading: {
        fontWeight: '700',
        marginTop: 10,
    }
})

export default styles;