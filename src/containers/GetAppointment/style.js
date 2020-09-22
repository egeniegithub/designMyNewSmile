import { StyleSheet } from 'react-native';
import colors from '../../Theme/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center'
    },
    heading: {
        color: colors.SecondryColor,
        fontSize: 18,
        fontWeight: '700',
        marginTop: 30
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
        width: '50%',
        height: '100%',
    },
    customButton: {
        backgroundColor: colors.Green,
        width: '40%',
        alignSelf: 'center',
        marginTop: 20
    },
    singleRowSmileContainer: {
        width: '90%',
        height: '20%',
        marginTop: 15
    },

})

export default styles;