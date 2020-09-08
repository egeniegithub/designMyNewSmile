
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
    const { originalPicture, clinicPicture } = this.props.route.params;
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          title="Design Detail"
          leftIcon="arrow-back"
          onPress={this.onPressGoBack}
        />

        <View style={{ marginTop: 40 }} >
          <Compare initial={deviceWidth / 2} draggerWidth={50} onMoveStart={this.onMoveStart} onMoveEnd={this.onMoveEnd} height={400}>
            <Before style={{height: 500}}>
              <Image source={{ uri: originalPicture }} style={{ width: deviceWidth, height: 400 }} />
            </Before>
            <After>
              <Image source={{ uri: clinicPicture }} style={{ width: deviceWidth, height: 400 }} />
            </After>
            <DefaultDragger />
          </Compare>
        </View>
      </View>
    );
  }
}