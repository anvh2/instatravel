import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as Constant from '../../constants';

class HeartTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{'Heart Tab'}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeartTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.MAIN_BACKGROUND_COLOR,
    alignItems: 'center',
  },
});
