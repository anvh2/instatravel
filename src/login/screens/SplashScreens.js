import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LOGIN_SCREEN_NAME } from '../../constants';
import LogoWithName from '../../components/LogoWithName';
import { connect } from 'react-redux';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    setTimeout(() => {
      const { navigation } = this.props;
      if (!navigation) {
        return;
      }
      const { STACKS } = LOGIN_SCREEN_NAME;
      navigation.navigate(STACKS.LOG_IN_SCREEN);
    }, 1000);

    return (
      <View style={styles.container}>
        <LogoWithName />
      </View>
    );
  }
}

const mapStatetoProps = state => ({});
export default connect(
  mapStatetoProps,
  null,
)(SplashScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
