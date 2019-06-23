import React from 'react';
import { StyleSheet, View,Linking } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import { Container, H1,Header, Content, Card, CardItem, Text, Body } from "native-base";

export default class DetailDriver extends React.Component {

    state = {
		dadosPiloto: [],
	};

  constructor(props) {
    super(props);
    this.state = { loading: true };
 
    
  }
  componentDidMount() {
    const dadospiloto = this.props.navigation.getParam('dadosPiloto');
    console.info(dadospiloto);
    this.setState({ dadosPiloto: dadospiloto });
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
   console.info(this.state.dadosPiloto);
      return (
    <Container>
    <View><Text><H1>{`  Formula 1 - Detalhe do Piloto`}</H1></Text></View>
 
    <Content padder>
      <Card>
        <CardItem header bordered>
          <Text>{this.state.dadosPiloto.givenName} {this.state.dadosPiloto.familyName}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
           <Text>Origem: {this.state.dadosPiloto.nationality} </Text>
          <Text>Aniversário: {this.state.dadosPiloto.dateOfBirth}</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Text onPress={() =>this.openLink(this.state.dadosPiloto.url)}>{this.state.dadosPiloto.url}</Text>
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




