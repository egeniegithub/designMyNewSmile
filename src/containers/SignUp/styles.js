import { StyleSheet } from 'react-native';
import colors from '../../Theme/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center'
    },
    customButton: {
        backgroundColor: colors.Green,
        width: '80%',
        marginTop: 15
    }
})

export default styles;