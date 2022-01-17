import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import LogoWithName from '../../components/LogoWithName';
import { SCALE, LOGIN_SCREEN_NAME } from '../../constants';
import {
  HandleVerifyOtp,
  HandleRequestOtp,
  confirm_error,
} from '../../actions/user_register';
import { connect } from 'react-redux';
import MyAlertComponent from '../../components/MyAlertComponent';
import { Button } from '@ui-kitten/components';

class ConfirmScreens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkTextChange: -1,
      opt: '',
      Notification: false,
      FailNotifcation: false,
      loadingOTP: false,
    };
  }
  textInputChange(value) {
    this.setState({
      checkTextChange: value.length >= 6 ? 1 : 0,
      opt: value,
    });
  }
  handleSentOpt = () => {
    const { route } = this.props;
    const { email } = route.params;

    this.props.HandleRequestOtp(email ? email : '');
    this.setState(
      {
        loadingOTP: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            Notification: true,
            loadingOTP: false,
          });
        }, 1000);
      },
    );
  };
  handleGoToLogIn = () => {
    const { checkTextChange } = this.state;
    if (checkTextChange <= 0) {
      return;
    }
    const email = this.props.EmailRegister;
    const otp = this.state.opt;
    const { navigation } = this.props;
    this.props.HandleVerifyOtp(email, otp, navigation);
  };

  handleBack = () => {
    const { navigation } = this.props;
    const { STACKS } = LOGIN_SCREEN_NAME;
    navigation.navigate(STACKS.LOG_IN_SCREEN);
  };

  hideAlert = () => {
    this.props.confirm_error(false, 0, null);
  };

  hideOPTAlert = () => {
    this.setState({
      Notification: false,
    });
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
            <Text style={styles.textFooter}>Nhập mã kích hoạt </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" size={SCALE(18)} color="#05375a" />
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Nhập mã kích hoạt"
                onChangeText={text => this.textInputChange(text)}
              />
              {checkTextChange > 0 && (
                <Feather name="check-circle" color="green" size={SCALE(18)} />
              )}
              {checkTextChange === 0 && (
                <Feather name="x-circle" color="red" size={SCALE(18)} />
              )}
            </View>
            <TouchableOpacity onPress={this.handleSentOpt}>
              <Text style={styles.text1}>Gửi lại mã</Text>
            </TouchableOpacity>
            <Button
              onPress={this.handleGoToLogIn}
              status={'success'}
              style={styles.button}>
              <Text style={styles.buttonText}>Kích hoạt</Text>
            </Button>
            <View style={styles.SignOut}>
              <View style={styles.SignOutGroup}>
                <TouchableOpacity onPress={this.handleBack}>
                  <Text style={styles.blue}>Trở về trang login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animatable.View>
          {(this.props.loading_confirm || this.props.ErrorConfirm) && (
            <MyAlertComponent
              loading={this.props.loading_confirm}
              is_error={this.props.ErrorConfirm}
              return_message={this.props.ReturnMessage_Confirm}
              onConfirmPressed={() => {
                this.hideAlert();
              }}
            />
          )}
          <MyAlertComponent
            loading={this.state.loadingOTP}
            is_error={this.state.Notification}
            return_message={'Mã OTP mới đã được gửi về Email của bạn!'}
            showConfirmButton={true}
            showCancelButton={false}
            confirmText={'Đóng'}
            onConfirmPressed={this.hideOPTAlert}
          />
        </View>
      </LinearGradient>
    );
  }
}
const mapDispathtoProps = {
  HandleVerifyOtp,
  HandleRequestOtp,
  confirm_error,
};
const mapStatetoProps = state => ({
  EmailRegister: state.Register.EmailRegister,
  ErrorConfirm: state.Register.ErrorConfirm,
  loading_confirm: state.Register.loading_confirm,
  ReturnMessage_Confirm: state.Register.ReturnMessage_Confirm,
});
export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(ConfirmScreens);

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
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
  footer: {
    height: '70%',
    backgroundColor: 'white',
    borderTopLeftRadius: SCALE(30),
    borderTopRightRadius: SCALE(30),
    padding: '10%',
    //paddingVertical: 50,
  },
  action: {
    flexDirection: 'row',
    marginTop: SCALE(10),
    borderBottomWidth: SCALE(1.5),
    borderBottomColor: '#f2f2f2',
    paddingBottom: SCALE(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: SCALE(16),
    color: '#05375a',
    fontSize: SCALE(16),
  },
  textFooter: {
    fontSize: SCALE(18),
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: SCALE(5),
    height: SCALE(40),
  },
  signIn: {
    width: '100%',
    height: 50,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  SignOut: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignOutGroup: {
    flexDirection: 'row',
  },
  text1: { color: '#009bd1', marginTop: SCALE(40), fontSize: SCALE(14) },
  buttonText: {
    fontSize: SCALE(18),
  },
});
