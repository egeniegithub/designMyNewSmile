import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

const TimeSlotPicker = (props) => {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = (time) => {
    this._menu.hide();
    props.selectedTime(time)
  };

  showMenu = () => {
    this._menu.show();
  };

  return (
    <Menu
      ref={this.setMenuRef}
      button={<TouchableWithoutFeedback onPress={this.showMenu}>
        <Image
          source={require('../../assets/timeSlot.png')}
          style={{ width: 30, height: 30, padding:10}}
        />
      </TouchableWithoutFeedback>}
    >
      <MenuItem onPress={() => this.hideMenu('Morning')}>Morning</MenuItem>
      <MenuItem onPress={() => this.hideMenu('Afternoon')}>Afternoon</MenuItem>
      <MenuItem onPress={() => this.hideMenu('Evening')}>Evening</MenuItem>
    </Menu>
  );
}

export default TimeSlotPicker;