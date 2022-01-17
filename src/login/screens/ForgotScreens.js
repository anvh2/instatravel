import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import LogoWithName from '../../components/LogoWithName';
import { SCALE } from '../../constants';
import { connect } from 'react-redux';
import {
  HandleResetPassword,
  success_reset,
} from '../../actions/user_register';
import MyAlertComponent from '../../components/MyAlertComponent';

class ForgotScreens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkTextChange: -1,
      phoneNumber: '',
      Notification: false,
      ErrorGmail: false,
    };
  }
  textInputChange(value) {
    this.setState({
      checkTextChange: this.valid(value) ? 1 : 0,
      phoneNumber: value,
    });
  }
  hideAlert = () => {
    this.props.success_reset(false);
    if (this.props.reset_return_code === 1) {
      const { navigation } = this.props;
      navigation.pop();
    }
  };
  valid = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleGoToConfirm = () => {
    const { checkTextChange } = this.state;
    if (checkTextChange <= 0) {
      this.setState({ checkTextChange: 0 });
      return;
    }
    if (this.valid(this.state.phoneNumber)) {
      this.props.HandleResetPassword(this.state.phoneNumber);
    }
  };
  render() {
    const { checkTextChange } = this.state;
    return (
      <LinearGradient
        colors={['#eafeff', '#a6fbff', '#c9fdff', '#88faff']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <LogoWithName />
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            {checkTextChange === 0 && (
              <Text style={styles.errorText}>Địa chỉ Email không hợp lệ!</Text>
            )}
            <View style={styles.action}>
              <Entypo name="email" size={SCALE(18)} color="#05375a" />
              <TextInput
                style={styles.textInput}
                placeholder="Nhập vào email của bạn"
                onChangeText={text => this.textInputChange(text)}
              />
              {checkTextChange > 0 && (
                <Feather name="check-circle" color="green" size={SCALE(18)} />
              )}
              {checkTextChange === 0 && (
                <Feather name="x-circle" color="red" size={SCALE(18)} />
              )}
            </View>
            <View style={styles.button}>

              <TouchableOpacity onPress={this.handleGoToConfirm}>
                <LinearGradient
                  colors={['#5db8fe', '#39cff2']}
                  style={styles.signIn}>
                  <Text style={[styles.textSignIn, styles.white]}>
                    Xác nhận
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

            </View>
            <View style={styles.SignOut}>
              <View style={styles.SignOutGroup}>
                <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                  <Text style={styles.blue}>Trở về</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animatable.View>
        </View>
        {(this.props.loading_reset || this.props.suc_reset) && (
          <MyAlertComponent
            loading={this.props.loading_reset}
            is_error={this.props.suc_reset}
            return_message={
              this.props.reset_return_code === 1
                ? 'Mật khẩu mới đã được gửi và email của bạn, Đăng nhập để đổi lại mật khẩu'
                : this.props.reset_return_message
            }
            onConfirmPressed={() => {
              this.hideAlert();
            }}
          />
        )}
      </LinearGradient>
    );
  }
}
const mapDispathtoProps = {
  HandleResetPassword,
  success_reset,
};
const mapStatetoProps = state => ({
  loading_reset: state.Register.loading_reset,
  suc_reset: state.Register.suc_reset,
  reset_return_message: state.Register.reset_return_message,
  reset_return_code: state.Register.reset_return_code,
});
export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(ForgotScreens);

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  errorText: {
    fontSize: SCALE(12),
    color: 'red',
  },
  container: {
    flex: 1,
  },
  white: {
    color: 'white',
  },
  blue: {
    color: 'blue',
    fontSize: SCALE(16),
  },
  header: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'white',
    borderTopLeftRadius: SCALE(30),
    borderTopRightRadius: SCALE(30),
    paddingHorizontal: '10%',
    paddingVertical: '10%',
    height: '70%',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: SCALE(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: SCALE(15),
    color: '#05375a',
    fontSize: SCALE(16),
  },
  textFooter: {
    fontSize: SCALE(18),
    color: '#05375a',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    marginTop: SCALE(5),
  },
  signIn: {
    width: '100%',
    height: SCALE(40),
    marginTop: SCALE(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SCALE(10),
    paddingHorizontal: SCALE(100)
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
});
