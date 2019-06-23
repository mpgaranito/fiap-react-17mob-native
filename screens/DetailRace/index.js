import React from 'react';
import { StyleSheet, View,Linking } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import { Container, H1,Header, Content, Card, CardItem, Text, Body } from "native-base";

export default class DetailRace extends React.Component {

    state = {
		dadosCorrida: [],
	};

  constructor(props) {
    super(props);
    this.state = { loading: true };
 
    
  }
  componentDidMount() {
    const dadosCorrida = this.props.navigation.getParam('dadosCorrida');
    this.setState({ dadosCorrida: dadosCorrida });
    }

    openLink(url){
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
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
   console.info(this.state.dadosCorrida);
      return (
    <Container>
    <View><Text><H1>{`  Formula 1 - Detalhe da Corrida `}</H1></Text></View>
 
    <Content padder>
      <Card>
        <CardItem header bordered>
          <Text>{this.state.dadosCorrida.givenName} {this.state.dadosCorrida.familyName}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
           <Text>Origem: {this.state.dadosCorrida.nationality} </Text>
          <Text>Aniversário: {this.state.dadosCorrida.dateOfBirth}</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Text onPress={() =>this.openLink(this.state.dadosCorrida.url)}>{this.state.dadosCorrida.url}</Text>
        </CardItem>
      </Card>
    </Content>
  </Container>
    );
   
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});




