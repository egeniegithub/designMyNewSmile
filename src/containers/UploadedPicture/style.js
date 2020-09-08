import { StyleSheet } from 'react-native';
import colors from '../../Theme/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: "90%",
        height: 400,
        margin: 20,
        borderRadius: 10,
        resizeMode: 'center'
    },
    textStyle: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 18
    },
})

export default styles;