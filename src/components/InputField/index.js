import React from 'react';
import { Input, Item, Icon } from 'native-base';
import styles from './styles';
import colors from '../../Theme/color';

function InputField (props) {
    return(
        <Item style={styles.item}>
            <Icon name={props.icon} />
            <Input 
                placeholder={props.placeholder}
                style={{fontSize: 15, }}
                selectionColor = {colors.PrimaryColor}
                autoCorrect= {false}
            />
        </Item>

    )
}

export default InputField;