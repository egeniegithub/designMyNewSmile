import React from 'react';
import { Button, Text, Spinner } from 'native-base';
import colors from '../../Theme/color';



function CustomButton(props) {
    return (
        <Button
            style={[{ justifyContent: 'center' }, props.style]}
            onPress={props.onPress}>

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