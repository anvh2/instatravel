import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeTab from '../bottom/HomeTab';
import HeartTab from '../bottom/HeartTab';
import NotificationsTab from '../bottom/NotificationsTab';
import SettingsTab from '../bottom/SettingsTab';

import * as Constant from '../../constants';
import { connect } from 'react-redux';
import NearByTab from '../bottom/NearByTab';

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={styles.badgeWrapper}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View style={styles.BadgeIcon}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Tabs = createBottomTabNavigator();

    return (
      <Tabs.Navigator
        initialRouteName={'main-app'}
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tabs.Screen
          key={1}
          name={'home'}
          component={HomeTab}
          options={{
            tabBarIcon: ({ color, size }) => (
              <IconFontisto name={'home'} size={SCALE(22)} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          key={2}
          name={'heart'}
          component={HeartTab}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={'heart'} size={SCALE(22)} color={color} />
            ),
          }}
        />
        {/* <Tabs.Screen
          key={3}
          name={'near-by'}
          component={NearByTab}
          options={{
            tabBarIcon: ({ color, size }) => (
              <IconMaterialIcons
                name={'place'}
                size={SCALE(25)}
                color={color}
              />
            ),
          }}
        /> */}
        <Tabs.Screen
          key={4}
          name={'notifications'}
          component={NotificationsTab}
          options={{
            tabBarIcon: ({ color, size }) => (
              <IconWithBadge
                name={'bell'}
                size={size}
                color={color}
                badgeCount={1}
              />
            ),
          }}
        />
        <Tabs.Screen
          key={5}
          name={'setting'}
          component={SettingsTab}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={'bars'} size={size} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);

const { SCALE } = Constant;

const styles = StyleSheet.create({
  badgeWrapper: {
    width: SCALE(24),
    height: SCALE(24),
    margin: SCALE(5),
  },
  BadgeIcon: {
    position: 'absolute',
    right: -SCALE(6),
    top: -SCALE(3),
    backgroundColor: 'red',
    borderRadius: SCALE(6),
    width: SCALE(12),
    height: SCALE(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: SCALE(10),
    fontWeight: 'bold',
  },
});
