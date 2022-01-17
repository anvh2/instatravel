import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { HEIGHT_LOGO, SCALE } from '../constants';

export default class LogoWithName extends React.Component {
  render() {
    console.log('logo');
    return (
      <View style={styles.header}>
        <Image
          // source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode={'stretch'}
        />
        <Text style={styles.textTitleBottom}>{''}</Text>
      </View>
    );
  }
}

// const { scale } = HEIGHT;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    marginTop: '5%',
  },
  logo: {
    width: HEIGHT_LOGO,
    height: HEIGHT_LOGO,
  },
  textTitleBottom: {
    fontSize: SCALE(40),
    color: 'green',
    // fontFamily: 'iCiel_Rukola',
    height: SCALE(60),
  },
});
