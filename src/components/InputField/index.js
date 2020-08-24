import React from 'react';
import { Input, Item, Icon } from 'native-base';
import styles from './styles';

function InputField (props) {
    return(
        <Item style={styles.item}>
            <Icon name={props.icon} />
            <Input 
                placeholder={props.placeholder}
                autoCorrect= {false}
            />
        </Item>

    )
}

export default InputField;