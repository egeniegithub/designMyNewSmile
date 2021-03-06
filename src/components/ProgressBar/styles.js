import { StyleSheet } from 'react-native';
import colors from '../../Theme/colors';

const styles = StyleSheet.create({
    container: {
        height: 80
    },
    CircleHeadingContainer: {
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-between',
    },
    circleHeadingTextContainer: {
        marginVertical: 4,

    },
    circleHeadingText: {
        fontSize: 7,
    },
    circleBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    circleContainer: {
        backgroundColor: colors.lightGrey,
        width: 26,
        height: 26,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleText: {
        color: colors.White,
        fontWeight: '700',
        fontSize: 12,
    },
    barContainer: {
        height: 5,
        width: 90,
        backgroundColor: colors.lightGrey,
        alignSelf: 'center'
    }
});

export default styles;