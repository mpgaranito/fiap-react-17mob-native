import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Menus from '../../components/Menus';





export default class Menu extends React.Component {

    state = {
		season: '',
	};

  constructor(props) {
    super(props);
    this.state = { loading: true };
 
    
  }
  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.setState({ season: season });
    }

  async componentWillMount() {

    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    
    });
    this.setState({ loading: false });
  }


   
    render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <SafeAreaView style={styles.container}>
        <Menus></Menus>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});




