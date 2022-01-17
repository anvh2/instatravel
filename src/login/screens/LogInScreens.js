import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { handleLoginRequest, login_error } from '../../actions';
import { LOGIN_CONST, LOGIN_SCREEN_NAME, SCALE } from '../../constants';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import LogoWithName from '../../components/LogoWithName';
import MyAlertComponent from '../../components/MyAlertComponent';
import Entypo from 'react-native-vector-icons/Entypo';

class LogInScreens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      checkTextChange: -1,
      checkPassChange: -1,
      password: '',
      secureTextEntry: true,
      visibleMes: false,
      FailAlert: false,
      destroyArlet: false,
    };

    this.handleCloseMessage = this.handleCloseMessage.bind(this);
    this.handleOpenMessagge = this.handleOpenMessagge.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.goToForgotPass = this.goToForgotPass.bind(this);
    this.goToSignIn = this.goToSignIn.bind(this);
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  textInputChange = value => {
    if (this.state.checkTextChange === -1) {
      this.setState({
        phone: value,
      });
    } else {
      this.setState({
        phone: value,
        checkTextChange: this.validateEmail(value) ? 1 : 0,
      });
    }
  };

  passInputChange = value => {
    if (this.state.checkPassChange === -1) {
      this.setState({
        password: value,
      });
    } else {
      this.setState({
        password: value,
        checkPassChange: value.length,
      });
    }
    this.setState({
      password: value,
    });
  };

  handleCloseMessage() {
    this.setState({ visibleMes: false });
  }

  handleOpenMessagge() {
    if (this.state.visibleMes) {
      return;
    }
    this.setState({ visibleMes: true });
  }

  secureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };
  toggleArlet = () => {
    this.setState({
      FailAlert: !this.state.FailAlert,
    });
  };

  hideAlert = () => {
    this.props.login_error(false);
  };

  handleLogin() {
    const { phone, password } = this.state;
    let { checkPassChange, checkTextChange } = this.state;
    checkPassChange = password.length;
    checkTextChange = this.validateEmail(phone) ? 1 : 0;

    if (
      phone.length === 0 ||
      password.length === 0 ||
      checkPassChange === 0 ||
      checkTextChange === 0
    ) {
      this.setState({
        checkPassChange: password.length,
        checkTextChange: this.validateEmail(phone) ? 1 : 0,
      });
      return;
    }
    this.setState({
      checkPassChange: phone.length,
      checkTextChange: password.length,
    });
    this.props.handleLoginRequest(phone, password);
  }

  goToForgotPass() {
    const { navigation } = this.props;
    if (!navigation) {
      return;
    }
    const { STACKS } = LOGIN_SCREEN_NAME;
    navigation.navigate(STACKS.FORGOT_SCREEN);
  }

  goToSignIn() {
    const { navigation } = this.props;
    if (!navigation) {
      return;
    }
    const { STACKS } = LOGIN_SCREEN_NAME;
    navigation.navigate(STACKS.REGISTER_SCREEN);
  }

  dismiss = () => {
    Keyboard.dismiss();
  };

  gotoConfirm = () => {
    this.hideAlert();
    const { navigation } = this.props;
    if (!navigation) {
      return;
    }
    const { STACKS } = LOGIN_SCREEN_NAME;
    navigation.navigate(STACKS.CONFIRM_SCREEN, { email: this.state.phone });
  };

  render() {
    const { checkPassChange, checkTextChange } = this.state;
    const { LOGIN_SCREEN } = LOGIN_CONST;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.dismiss}>
          <LogoWithName />
          <Animatable.View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {checkTextChange === 0 && (
                <Text style={styles.errorText}>
                  Địa chỉ Email không hợp lệ!
                </Text>
              )}
              <View style={styles.action}>
                <Entypo
                  style={styles.Icons}
                  name="email"
                  size={SCALE(18)}
                  color="#05375a"
                />
                <TextInput
                  defaultValue={this.state.phone}
                  style={styles.textInput}
                  placeholder={'Nhập địa chỉ Email của bạn'}
                  onChangeText={this.textInputChange}
                />
                {checkTextChange > 0 && (
                  <Feather name="check-circle" color="green" size={SCALE(18)} />
                )}
                {checkTextChange === 0 && (
                  <Feather name="x-circle" color="red" size={SCALE(18)} />
                )}
              </View>
              {/* <Text style={styles.textFooter}>Mật khẩu:</Text> */}
              {checkPassChange === 0 && (
                <Text style={styles.errorText}>Mật khẩu không hợp lệ!</Text>
              )}
              <View style={styles.action}>
                <Entypo
                  style={styles.Icons}
                  name="lock"
                  size={SCALE(18)}
                  color="#05375a"
                />
                <TextInput
                  secureTextEntry={this.state.secureTextEntry}
                  onChangeText={this.passInputChange}
                  style={styles.textInput}
                  placeholder={'Nhập mật khẩu của bạn'}
                />
                <TouchableOpacity onPress={this.secureTextEntry}>
                  {this.state.secureTextEntry ? (
                    <Feather name="eye-off" color="gray" size={SCALE(18)} />
                  ) : (
                    <Feather name="eye" color="gray" size={SCALE(18)} />
                  )}
                </TouchableOpacity>
                {checkPassChange > 0 && (
                  <Feather
                    style={styles.m10}
                    name="check-circle"
                    color="green"
                    size={SCALE(18)}
                  />
                )}
                {checkPassChange === 0 && (
                  <Feather
                    style={styles.m10}
                    name="x-circle"
                    color="red"
                    size={SCALE(18)}
                  />
                )}
              </View>
              <TouchableOpacity
                disabled={this.props.loading}
                onPress={this.goToForgotPass}>
                <Text style={styles.textForgotPass}>
                  {LOGIN_SCREEN.FORGET_PASS}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={this.props.loading}
                onPress={this.handleLogin}>
                <LinearGradient
                  colors={['#5db8fe', '#39cff2']}
                  style={styles.button}>
                  <View style={styles.row}>
                    <Text style={[styles.textSignIn, styles.white]}>
                      {LOGIN_SCREEN.BTN_LOGIN}
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

              <View style={styles.SignOut}>
                <View style={styles.SignOutGroup}>
                  <Text style={styles.textRegis}>{LOGIN_SCREEN.NO_ACC}</Text>
                  <TouchableOpacity
                    onPress={this.goToSignIn}
                    disabled={this.props.loading}>
                    <Text style={[styles.textRegis, styles.blue, styles.m10]}>
                      {LOGIN_SCREEN.REGIS}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </Animatable.View>
        </TouchableWithoutFeedback>

        <MyAlertComponent
          loading={this.props.loading}
          is_error={this.props.isError}
          return_code={this.props.return_code}
          return_message={
            this.props.return_code === 7
              ? this.props.return_message + ' Bạn có muốn xác nhận email không?'
              : this.props.return_message
          }
          onConfirmPressed={
            this.props.return_code === 7 ? this.gotoConfirm : this.hideAlert
          }
          showConfirmButton={true}
          showCancelButton={this.props.return_code === 7}
          onCancelPressed={this.hideAlert}
          cancelText={'Không'}
          confirmText={this.props.return_code === 7 ? '   Có   ' : 'Đóng'}
        />
      </View>
    );
  }
}

const mapDispathtoProps = {
  handleLoginRequest,
  login_error,
};

const mapStatetoProps = state => ({
  user: state.user.user,
  loading: state.user.loading,
  isError: state.user.isError,
  return_message: state.user.return_message,
  return_code: state.user.return_code,
});

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(LogInScreens);

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
    borderTopLeftRadius: SCALE(30),
    borderTopRightRadius: SCALE(30),
    paddingHorizontal: '10%',
    paddingVertical: '10%',
    height: '70%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  action: {
    flexDirection: 'row',
    marginBottom: SCALE(30),
    borderBottomWidth: SCALE(2),
    borderBottomColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginLeft: SCALE(5),
    color: '#05375a',
    height: SCALE(40),
    fontSize: SCALE(16),
  },
  textFooter: {
    fontSize: SCALE(14),
    color: '#05375a',
  },
  errorText: {
    fontSize: SCALE(12),
    color: 'red',
  },
  button: {
    alignItems: 'center',
    marginTop: SCALE(5),
    flex: 1,
    height: SCALE(40),
    justifyContent: 'center',
    borderRadius: SCALE(5),
  },
  signIn: {
    width: '100%',
    height: SCALE(60),
    marginTop: SCALE(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SCALE(5),
  },
  textSignIn: {
    fontWeight: 'bold',
    fontSize: SCALE(18),
  },
  SignOut: {
    marginTop: SCALE(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignOutGroup: {
    flexDirection: 'row',
  },
  white: {
    color: 'white',
  },
  textForgotPass: {
    color: '#009bd1',
    marginTop: SCALE(16),
    fontSize: SCALE(14),
  },
  blue: {
    color: 'blue',
  },
  m30: {
    marginTop: SCALE(30),
  },
  m10: {
    marginLeft: SCALE(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icons: {
    width: SCALE(20),
  },
  textRegis: {
    fontSize: SCALE(14),
    color: '#05375a',
  },
});
