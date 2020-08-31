import { Alert } from 'react-native';

export const alertMessage = (title, message, oKFunction, cancelFunction) => {
    Alert.alert(
        title,
        message,
        [
            (oKFunction && {
                text: "OK", onPress: oKFunction
            }),
            (cancelFunction && {
                text: "Cancel",
                onPress: cancelFunction,
                style: "cancel"
            }),
        ],
        { cancelable: false }
    );
}