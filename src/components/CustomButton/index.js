import React from 'react';
import { Button, Text, Spinner } from 'native-base';
import * as colors from '../../Theme/Color';



function CustomButton(props) {
    return (
        <Button
            style={[{ justifyContent: 'center' }, props.style]}
            onPress={() => {
                if (!props.customButtonClick) {
                    props.onPressLoginButton();
                }
            }}>

            {
                props.customButtonClick ?
                    <Spinner color={colors.White} ></Spinner>
                    :
                    <Text>{props.text}</Text>
            }
        </Button>
    )
}

export default CustomButton;