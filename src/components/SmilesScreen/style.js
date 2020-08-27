import { StyleSheet } from 'react-native';
import colors from '../../Theme/color';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    heading: {
        color: colors.PrimaryColor,
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 25,
    },
    checkBox: {
        width: 20,
        height: 20,
        alignItems: 'center',
        paddingRight: 8,
        paddingLeft: 8,
        marginLeft: -5
    },
    textWithCheckBoxContainer: {
        flexDirection: 'row',
    },
    designText: {
        marginLeft: 20,
        marginTop: 2
    },
    designImage: {
        width: "100%",
        height: "85%",
        borderRadius: 6,
        marginTop: 10
    },
    singleSmileContainer: {
        width: '45%',
        height: '100%',
    },
    singleRowSmileContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        justifyContent: 'space-around',
        marginTop: 30
    },
    smilesMainContainer: {
        width: '100%',
        height: '60%',
    },
    customButton: {
        backgroundColor: colors.Green,
        width: '40%',
        alignSelf: 'center',
        marginTop: 20
    },

});

export default styles;