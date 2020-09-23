import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
      button={<Icon onPress={this.showMenu} name={'menu'} />}
    >
      <MenuItem onPress={() => this.hideMenu('Morning')}>Morning</MenuItem>
      <MenuItem onPress={() => this.hideMenu('Afternoon')}>Afternoon</MenuItem>
      <MenuItem onPress={() => this.hideMenu('Evening')}>Evening</MenuItem>
    </Menu>
  );
}

export default TimeSlotPicker;