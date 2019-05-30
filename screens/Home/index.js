import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Seasons from '../../components/Seasons';
import {SafeAreaView} from 'react-navigation';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    
    });

    this.setState({ loading: false });
  }
    
  
    getData(season) {
    fetch('http://ergast.com/api/f1/' + season + '.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
    
        <SafeAreaView style={styles.container}>
        <Seasons
          handleParam={this.getData}
        ></Seasons>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




