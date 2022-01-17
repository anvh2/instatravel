import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';
// import AsyncStorage from '@react-native-community/async-storage';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);

    NetInfo.fetch().then(state => {
      this.setState({ isConnected: state.isConnected });
      console.log('Internet connected: ' + state.isConnected);
    });

    this.state = {
      isConnected: true,
      savedUser: null,
    };
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <App user={this.state.savedUser} />
        </ApplicationProvider>
      </Provider>
    );
  }
}
