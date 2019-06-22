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
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#333',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },
  }
);

export default createAppContainer(AppNavigator);