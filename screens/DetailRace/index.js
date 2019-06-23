import React from 'react';
import { StyleSheet, View, Linking, Fragment } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Container, H1, Header, Content, Card, CardItem, Text, Body } from "native-base";

export default class DetailRace extends React.Component {

  state = {
    dadosCorrida: [],
    results: [],
    isMounted: false,
  };

  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.getData = this.getData.bind(this);
    this.renderListRaces = this.renderListRaces.bind(this);
  }

  
  componentDidMount() {
    this.setState({isMounted: true})
    const dadosCorrida = this.props.navigation.getParam('dadosCorrida');
    this.setState({ dadosCorrida: dadosCorrida });
    this.getData(dadosCorrida);
   
  
  }

  componentWillUnmount(){
    this.state.isMounted = false
}
  openLink(url) {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }
  async componentWillMount() {

    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),

    });
    this.setState({ loading: false });
  }

 
  renderListRaces() {
    const t =this.state.results;
    console.log(t);
    let values = [];
    values.push(
          
            <Card key='20'>
              <CardItem header bordered>
                <Text>{this.state.dadosCorrida.raceName}</Text>
                <Text>{`${t.Results.Driver.givenName} ${t.Results.Driver.familyName}`} </Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>Circuito: {this.state.dadosCorrida.Circuit.circuitName} </Text>
                  <Text>Local: {this.state.dadosCorrida.Circuit.Location.locality}</Text>
                </Body>
              </CardItem>
              <CardItem footer bordered>
                <Text onPress={() => this.openLink(this.state.dadosCorrida.url)}>{this.state.dadosCorrida.url}</Text>
              </CardItem>
            </Card>
         
          );
      //console.info(values);
      return values;
    }

  getData(dadosCorrida) {
    const season = dadosCorrida.season;
    const round = dadosCorrida.round;
    console.info(season + '-' + round);
    fetch(`http://ergast.com/api/f1/${season}/${round}/fastest/${round}/results.json`)
      .then((response) => response.json())
      .then((data) => {
     
        if (this.state.isMounted) {
        this.setState({
          results: data.MRData.RaceTable.Races
        });
         
        }
       
      });

  }


  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
   
    const {resultados} = this.state;
    return (
      
      <Container>
        <View><Text><H1>{`  Formula 1 - Detalhe da Corrida `}</H1></Text></View>
       <SafeAreaView>
           <View>{this.renderListRaces()}</View> 
       </SafeAreaView>

      </Container>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});




