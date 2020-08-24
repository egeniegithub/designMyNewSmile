import {StyleSheet} from 'react-native';
import * as colors from '../../Theme/Color';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Green
    },
    splashText: {
        color: colors.White,
        fontSize: 18
    }
})

export default styles;