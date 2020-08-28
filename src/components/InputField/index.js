import React from 'react';
import { Input, Item, Icon } from 'native-base';
import styles from './styles';
import colors from '../../Theme/color';

function InputField (props) {
    return(
        <Item style={[styles.item, props.containerStyle]}>
            <Icon name={props.icon} />
            <Input 
                placeholder={props.placeholder}
                style={{fontSize: 15, }}
                selectionColor = {colors.PrimaryColor}
                autoCorrect= {false}
                value={props.value}
                onChangeText={props.onChangeText}
                disabled={props.disabled}
            />
        </Item>

    )
}

export default InputField;