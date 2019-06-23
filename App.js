import React from 'react';
import LogoTitle from './components/LogoTitle';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import HomeScreen from './screens/Home'; //Pagina Home
import MenuScreen from './screens/Menu'; //Segunda Pagina
import RacingDriversScreen from './screens/RacingDrivers'; //Pagina de Pilotos
import RacesScreen from './screens/Races'; //Pagina de Corridas
 import DetailDriver from './screens/DetailDriver'; //Pagina de Detalhe do Piloto


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Menu: {
      screen: MenuScreen,
    },
    Drivers: {
      screen: RacingDriversScreen,
    },
    Races: {
      screen: RacesScreen,
    },
    DetailDrive: {
      screen: DetailDriver,
    }
  },
  {
    initialRouteName: 'Home',
     defaultNavigationOptions: {
       headerStyle: {
         backgroundColor: '#000',
        },
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold',
        },
        headerTitle: <LogoTitle />,
        
    },
  }
);

export default createAppContainer(AppNavigator);