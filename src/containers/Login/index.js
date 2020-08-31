import React, { useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction'
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton'
import CustomHeader from '../../components/CustomHeader';




function Login(props) {
  const [customButtonClick, setCustomButtonClick] = useState(false);

  async function onPressLoginButton(props) {
    setCustomButtonClick(true);
    alert('here is test...')
    // let data = await props.login('hamza3', 'hamza3');
    // if (data.data.status === 'success') {
    //   setCustomButtonClick(false);
    //   props.navigation.navigate('Dashboard');
    // }
    // else {
    //   setCustomButtonClick(false);
    // }
  }

  function onPressMenu() {
    props.navigation.toggleDrawer();
  }

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        title="Login"
        leftIcon="menu"
        onPress={onPressMenu}
      />
      <View style={styles.container}>
        <View style={{ width: '90%' }}>
          <InputField
            placeholder="Email"
            icon="person-outline"
          />
        </View>
        <View style={{ width: '90%' }}>
          <InputField
            placeholder="Password"
            icon="lock-closed-outline"
          />
        </View>
        <CustomButton
          text={"Login"}
          style={styles.customButton}
          onPress={onPressLoginButton}
          customButtonClick={customButtonClick}
        />
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    userObject: state.user.userObject,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userName, password) => dispatch(actions.setLogin(userName, password)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
