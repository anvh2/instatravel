import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Navigation';
import { ScreenName } from '../../constants';
import ViewPost from '../screens/ViewPost';

export default class RootStack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NavItems = [
      {
        id: 1,
        name: ScreenName.Navigation,
        component: Navigation,
      },
      {
        id: 2,
        name: ScreenName.ViewPost,
        component: ViewPost,
      }
    ];

    const Stack = createStackNavigator();

    return (
      <Stack.Navigator headerMode="none">
        {NavItems.map(item => (
          <Stack.Screen
            key={item.id}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    );
  }
}
