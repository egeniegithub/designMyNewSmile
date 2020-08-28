import { StyleSheet } from 'react-native';
import colors from '../../Theme/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deactivateText: {
        color: colors.Grey,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    customButton: {
        backgroundColor: colors.PrimaryColor,
        width: '40%',
        marginTop: 30,
        alignSelf: 'center'
    },
})

export default styles;