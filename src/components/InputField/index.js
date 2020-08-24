import React from 'react';
import { Input, Item, Icon } from 'native-base';

function InputField (props) {
    return(
        <Item>
            <Icon name={props.icon} />
            <Input 
                placeholder={props.placeholder}
                autoCorrect= {false}
            />
        </Item>

    )
}

export default InputField;