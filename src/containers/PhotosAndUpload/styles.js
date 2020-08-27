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
    HeadingText: {
        color: colors.SecondryColor,
        fontSize: 18,
        fontWeight: '700'
    },
    customButton: {
        backgroundColor: colors.Green,
        width: '40%',
        marginTop: 30
    },
    uploadImage: {
        width: '100%',
        height: 100,
    },
    imagesContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    imageButtonStyle: {
        width: '25%',
        height: 100,
        marginHorizontal: 6,
    }
})

export default styles;