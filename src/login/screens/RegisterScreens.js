import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import ScreenHeader from '../../components/ScreensHeader';
import MyAlertComponent from '../../components/MyAlertComponent';
import {
  handleRegisterRequest,
  registerPayLoad,
} from '../../actions/user_register';
import { LOGIN_CONST, SCALE } from '../../constants';
import { Radio, RadioGroup, Button } from '@ui-kitten/components';

class RegisterScreens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkPhone: -1,
      email: '',
      checkName: -1,
      loading: false,
      name: '',
      user_type: 'UserTypePatient',
      checkPass: -1,
      pass: '',
      checkRepass: -1,
      rePass: '',
      secureTextEntry: true,
      secureTextEntry_comfirm: true,
      selectedIndex: 0,
      checkTextInput: -1,
    };

    this.handleSelectedIndex = this.handleSelectedIndex.bind(this);
    this.secureTextEntry = this.secureTextEntry.bind(this);
    this.secureTextEntryComfirm = this.secureTextEntryComfirm.bind(this);
    this.RegisterAccount = this.RegisterAccount.bind(this);
  }

  textInputChange(value, id) {
    if (id === 'email') {
      this.setState({
        checkPhone: this.validateEmail(value) ? 1 : 0,
        email: value,
      });
    } else if (id === 'name') {
      this.setState({
        checkName: value.length,
        name: value,
      });
    } else if (id === 'pass') {
      this.setState({
        checkPass: value.length >= 6 ? 1 : 0,
        pass: value,
      });
    } else if (id === 're-pass') {
      this.setState({
        checkRepass: value === this.state.pass && value.length !== 0 ? 1 : 0,
        rePass: value,
      });
    }
  }

  secureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  secureTextEntryComfirm() {
    this.setState({
      secureTextEntry_comfirm: !this.state.secureTextEntry_comfirm,
    });
  }
  showAlert = () => {
    this.setState({
      FailAlert: true,
    });
  };

  hideAlert = () => {
    this.props.registerPayLoad(false, 0, null);
  };
  RegisterAccount() {
    const { email, pass, rePass } = this.state;
    this.setState(
      {
        checkPhone: this.validateEmail(email) ? 1 : 0,
        checkPass: pass.length >= 6 ? 1 : 0,
        checkRepass: rePass === pass && rePass.length !== 0 ? 1 : 0,
      },
      () => {
        if (
          email.length === 0 ||
          pass.length === 0 ||
          rePass !== pass ||
          this.state.checkPhone === 0 ||
          this.state.checkPass === 0
        ) {
          return;
        }
        let user_type = 'UserTypePatient';
        if (this.state.selectedIndex === 1) {
          user_type = 'UserTypeDoctor';
        }
        const { navigation } = this.props;
        this.props.handleRegisterRequest(email, pass, user_type, navigation);
      },
    );
  }
  handleSelectedIndex(value) {
    this.setState({ selectedIndex: value });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const { REGISTER_SCREEN } = LOGIN_CONST;
    const { data } = REGISTER_SCREEN;
    const { navigation } = this.props;
    const {
      selectedIndex,
      checkPass,
      checkPhone,
      checkRepass,
      secureTextEntry,
      secureTextEntry_comfirm,
    } = this.state;
    return (
      <LinearGradient
        colors={['#eafeff', '#a6fbff', '#c9fdff', '#88faff']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <ScreenHeader
              title={'Tạo tài khoản'}
              backIconName={'chevron-left'}
              navigation={navigation}
            />
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.inputBlock} key={data[0].ID}>
                <Text style={styles.textFooter}>{data[0].TITLE}</Text>
                <View style={styles.action}>
                  <Entypo
                    name={data[0].ICON}
                    size={SCALE(18)}
                    color="#05375a"
                  />
                  <TextInput
                    style={styles.textInput}
                    keyboardType={data[0].TYPE}
                    placeholder={data[0].HINT}
                    onChangeText={text =>
                      this.textInputChange(text, data[0].ID)
                    }
                  />
                  {checkPhone > 0 && (
                    <Feather
                      name="check-circle"
                      color="green"
                      size={SCALE(18)}
                    />
                  )}
                  {checkPhone === 0 && (
                    <Feather name="x-circle" color="red" size={SCALE(18)} />
                  )}
                </View>
              </View>
              <View style={styles.inputBlock} key={data[2].ID}>
                <Text style={styles.textFooter}>{data[2].TITLE}</Text>
                <View style={styles.action}>
                  <FontAwesome
                    name={data[2].ICON}
                    size={SCALE(18)}
                    color="#05375a"
                  />
                  <TextInput
                    secureTextEntry={secureTextEntry}
                    style={styles.textInput}
                    keyboardType={data[2].TYPE}
                    placeholder={data[2].HINT}
                    onChangeText={text =>
                      this.textInputChange(text, data[2].ID)
                    }
                  />
                  <TouchableOpacity onPress={this.secureTextEntry}>
                    {secureTextEntry ? (
                      <Feather name="eye-off" color="gray" size={SCALE(18)} />
                    ) : (
                      <Feather name="eye" color="gray" size={SCALE(18)} />
                    )}
                  </TouchableOpacity>

                  {checkPass > 0 && (
                    <Feather
                      style={styles.m10}
                      name="check-circle"
                      color="green"
                      size={18}
                    />
                  )}
                  {checkPass === 0 && (
                    <Feather
                      style={styles.m10}
                      name="x-circle"
                      color="red"
                      size={18}
                    />
                  )}
                </View>
              </View>
              <View style={styles.inputBlock} key={data[3].ID}>
                <Text style={styles.textFooter}>{data[3].TITLE}</Text>
                <View style={styles.action}>
                  <FontAwesome
                    name={data[3].ICON}
                    size={SCALE(18)}
                    color="#05375a"
                  />
                  <TextInput
                    secureTextEntry={secureTextEntry_comfirm}
                    style={styles.textInput}
                    keyboardType={data[3].TYPE}
                    placeholder={data[3].HINT}
                    onChangeText={text =>
                      this.textInputChange(text, data[3].ID)
                    }
                  />
                  <TouchableOpacity onPress={this.secureTextEntryComfirm}>
                    {secureTextEntry_comfirm ? (
                      <Feather name="eye-off" color="gray" size={SCALE(18)} />
                    ) : (
                      <Feather name="eye" color="gray" size={SCALE(18)} />
                    )}
                  </TouchableOpacity>

                  {checkRepass > 0 && (
                    <Feather
                      style={styles.m10}
                      name="check-circle"
                      color="green"
                      size={SCALE(18)}
                    />
                  )}
                  {checkRepass === 0 && (
                    <Feather
                      style={styles.m10}
                      name="x-circle"
                      color="red"
                      size={SCALE(18)}
                    />
                  )}
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.textFooter}>{'Loại tài khoản'}</Text>
                  <RadioGroup
                    style={styles.radiogroup}
                    selectedIndex={selectedIndex}
                    onChange={this.handleSelectedIndex}>
                    <Radio style={styles.rdn} status="success">
                      <Text style={styles.textInput}>{'Bệnh nhân'}</Text>
                    </Radio>
                    <Radio style={styles.rdn} status="primary">
                      <Text style={styles.textInput}>{'Bác sĩ'}</Text>
                    </Radio>
                  </RadioGroup>
                </View>
                <Button
                  onPress={this.RegisterAccount}
                  status={'success'}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Đăng kí</Text>
                </Button>
              </View>
            </ScrollView>
          </Animatable.View>
          <MyAlertComponent
            loading={this.props.loading}
            is_error={this.props.isError}
            return_message={this.props.ReturnMessage}
            onConfirmPressed={this.hideAlert}
          />
        </View>
      </LinearGradient>
    );
  }
}
const mapDispathtoProps = {
  handleRegisterRequest,
  registerPayLoad,
};
const mapStatetoProps = state => ({
  loading: state.Register.loading,
  isError: state.Register.isError,
  ReturnMessage: state.Register.ReturnMessage,
});
export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(RegisterScreens);
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  footer: {
    height: '90%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: SCALE(30),
    borderTopRightRadius: SCALE(30),
    paddingHorizontal: '10%',
    paddingVertical: '10%',
  },
  action: {
    flexDirection: 'row',
    marginTop: SCALE(10),
    borderBottomWidth: SCALE(1),
    borderBottomColor: '#f2f2f2',
    paddingBottom: SCALE(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: SCALE(15),
    color: '#05375a',
    fontSize: SCALE(14),
  },
  textFooter: {
    fontSize: SCALE(18),
    color: '#05375a',
  },
  button: {
    marginVertical: SCALE(15),
    height: SCALE(40),
  },
  buttonText: {
    fontSize: SCALE(18),
  },
  // signIn: {
  //   width: '100%',
  //   height: 50,
  //   marginTop: 15,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  // },
  // textSignIn: {
  //   fontWeight: 'bold',
  //   fontSize: 18,
  //   color: 'white',
  // },
  wrapper: {
    width: '90%',
  },
  inputBlock: {
    marginBottom: SCALE(20),
  },
  radiogroup: {
    flexDirection: 'row',
    marginTop: SCALE(10),
    justifyContent: 'space-between',
  },
  m10: {
    marginLeft: SCALE(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
