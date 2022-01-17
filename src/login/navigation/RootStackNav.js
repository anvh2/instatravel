import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import SplashScreens from '../screens/SplashScreens';
import LogInScreens from '../screens/LogInScreens';
import RegisterScreens from '../screens/RegisterScreens';
import ForgotScreens from '../screens/ForgotScreens';
import ConfirmScreens from '../screens/ConfirmScreens';
import { LOGIN_SCREEN_NAME } from '../../constants';

function Login(props) {
  const { STACKS } = LOGIN_SCREEN_NAME;

  const StackNavigator = [
    {
      name: STACKS.SPLASH_SCREEN,
      screen: SplashScreens,
    },
    {
      name: STACKS.LOG_IN_SCREEN,
      screen: LogInScreens,
    },
    {
      name: STACKS.REGISTER_SCREEN,
      screen: RegisterScreens,
    },
    {
      name: STACKS.CONFIRM_SCREEN,
      screen: ConfirmScreens,
    },
    {
      name: STACKS.FORGOT_SCREEN,
      screen: ForgotScreens,
    },
  ];

  const Stack = createStackNavigator();
  const { firstTimeLogin } = props;

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={
        firstTimeLogin ? STACKS.SPLASH_SCREEN : STACKS.LOG_IN_SCREEN
      }>
      {StackNavigator.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.screen}
        />
      ))}
    </Stack.Navigator>
  );
}

const mapStateToProps = state => ({
  firstTimeLogin: state.user.firstTimeLogin,
});

export default connect(
  mapStateToProps,
  null,
)(Login);
