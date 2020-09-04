
import CustomHeader from "../../components/CustomHeader";
import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, Image, Platform, ScrollView } from 'react-native';
import Compare, { Before, After, DefaultDragger, Dragger } from '@malik.aliyev.94/react-native-before-after-slider';
import { CommonActions } from '@react-navigation/native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class SmileDesignDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollEnabled: true,
    }
  }

  onMoveStart = () => {
    this.setState({ scrollEnabled: false });
  }

  onMoveEnd = () => {
    this.setState({ scrollEnabled: true });
  }

  renderCompareImages = () => {

  }

  resetStack = (name) => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: name },
        ],
      })
    );
  }

  onPressGoBack = () => {
    this.resetStack('SmileDesign')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          title="Design Detail"
          leftIcon="arrow-back"
          onPress={this.onPressGoBack}
        />

        <ScrollView style={{ marginTop: 50 }} scrollEnabled={this.state.scrollEnabled}>
          <Compare initial={deviceWidth / 2} draggerWidth={50} onMoveStart={this.onMoveStart} onMoveEnd={this.onMoveEnd}>
            <Before>
              <Image source={require('../../assets/splash.png')} style={{ width: deviceWidth, height: deviceWidth / 2 }} />
            </Before>
            <After>
              <Image source={require('../../assets/pic1.jpeg')} style={{ width: deviceWidth, height: deviceWidth / 2 }} />
            </After>
            <DefaultDragger />
          </Compare>
          <View style={{ marginTop: 30 }}>
            <Compare initial={deviceWidth / 2} draggerWidth={50} onMoveStart={this.onMoveStart} onMoveEnd={this.onMoveEnd} >
              <Before>
                <Image source={require('../../assets/splash.png')} style={{ width: deviceWidth, height: deviceWidth / 2 }} />
              </Before>
              <After>
                <Image source={require('../../assets/pic1.jpeg')} style={{ width: deviceWidth, height: deviceWidth / 2 }} />
              </After>
              <DefaultDragger />
            </Compare>
          </View>
        </ScrollView>
      </View>
    );
  }
}