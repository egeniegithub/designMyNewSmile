import React from 'react';
import { Input, Item, Icon } from 'native-base';
import styles from './styles';
import colors from '../../Theme/color';

function InputField(props) {
    return (
        <Item style={[styles.item, props.containerStyle]} onPress={props.onPressInputField}>
            <Icon name={props.icon} />
            <Input
                placeholder={props.placeholder}
                style={[{ fontSize: 15, }, props.style]}
                selectionColor={colors.PrimaryColor}
                autoCorrect={false}
                value={props.value}
                onChangeText={props.onChangeText}
                disabled={props.disabled}
                autoCapitalize={"none"}
                pointerEvents={props.pointerEvents}
                multiline={props.multiline}
            />
            <Icon
                name={props.rightIcon}
                style={{ fontSize: 20, color: colors.PrimaryColor, }}
                onPress={props.onPressRightIcon}
            />
            {props.rightTimeMenu}
        </Item>

    )
}

export default InputField;