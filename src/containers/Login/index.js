import React, { useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction'
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton'
import CustomHeader from '../../components/CustomHeader';
import { alertMessage } from '../../common/functions';



function Login(props) {
  const [spinnerOnButton, setSpinnerOnButton] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onPressLoginButton() {
    if (!email || !password) {
      alertMessage('Empty Field!', 'Please fill all fields.',
        () => { },
        ''
      );
    } else {
      setSpinnerOnButton(true);
      let data = await props.login(email, password);
      if (!data.error) {
        setSpinnerOnButton(false)
        props.navigation.navigate('SelectTreatment');
      } else {
        alertMessage('Error!', data.message,
          () => { setSpinnerOnButton(false) },
          ''
        );
      }
    }
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
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={{ width: '90%' }}>
          <InputField
            placeholder="Password"
            icon="lock-closed-outline"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <CustomButton
          text={"Login"}
          style={styles.customButton}
          onPress={!spinnerOnButton ? onPressLoginButton : () => {}}
          customButtonClick={spinnerOnButton}
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
