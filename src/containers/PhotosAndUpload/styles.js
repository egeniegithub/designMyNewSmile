import { StyleSheet } from 'react-native';
import colors from '../../Theme/colors';

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
    },
    modalButtonImage: {
        backgroundColor: colors.PrimaryColor,
        width: '35%',
    },
    modalButtonCancel: {
        backgroundColor: colors.Grey,
        width: '35%',
    },
    modalFooterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    footerDivider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey
    },
    modalFooter: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        right: 8,
        backgroundColor: colors.White
    },
    modalText: {
       textAlign: 'justify',
    },
    videoTutorialButton: {
        backgroundColor: 'red',
        marginBottom: 10,
    }
})

export default styles;