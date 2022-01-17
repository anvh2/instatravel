/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { connect } from 'react-redux';
import TabHeader from '../../components/TabHeader';
import { MAIN_BACKGROUND_COLOR } from '../../constants';

class SettingsTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TabHeader />
        <SkeletonPlaceholder>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 60, height: 60, borderRadius: 50 }} />
            <View style={{ marginLeft: 20 }}>
              <View style={{ width: 120, height: 20, borderRadius: 4 }} />
              <View
                style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
              />
            </View>
          </View>
        </SkeletonPlaceholder>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

const mapDispathtoProps = {};

export default connect(
  mapStateToProps,
  mapDispathtoProps,
)(SettingsTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    alignItems: 'center',
  },
});
