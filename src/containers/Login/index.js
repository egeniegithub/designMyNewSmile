import React, { useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction'
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton'




function Login(props) {
  const [customButtonClick, setCustomButtonClick] = useState(false);

  async function onPressLoginButton(props) {
    setCustomButtonClick(true);
    let data = await props.login('hamza3', 'hamza3');
    if (data.data.status === 'success') {
      setCustomButtonClick(false);
      props.navigation.navigate('Dashboard');
    }
    else {
      setCustomButtonClick(false);
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ width: '90%' }}>
        <InputField
          placeholder="UserName"
          icon="person-outline"
        />
        <InputField
          placeholder="Password"
          icon="lock-closed-outline"
        />
      </View>
      <CustomButton
        text={"Login"}
        style={styles.customButton}
        onPressLoginButton={() => onPressLoginButton(props)}
        customButtonClick={customButtonClick}
      />

      <View style={styles.signupTextContainer}>
        <Text>Don't have account? </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUp')}
        >
          <Text style={styles.signupText}>SignUp</Text>
        </TouchableOpacity>
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
