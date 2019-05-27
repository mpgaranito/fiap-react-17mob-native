import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import HomeScreen from './screens/Home';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }

);
export default createAppContainer(AppNavigator);