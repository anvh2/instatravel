import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './containers/navigation/RootStack';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
