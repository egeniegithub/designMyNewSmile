import { StyleSheet } from 'react-native';
import colors from '../../Theme/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        margin: 20,
        borderRadius: 10,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
    }
})

export default styles;