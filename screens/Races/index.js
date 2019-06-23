import React, { Fragment} from 'react';
import { Container, Content, H1,  Text, Button, Card, CardItem, Body } from 'native-base';
import { View } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Moment from 'moment';

export default class  Races extends React.Component {

    state = {
        results: [],
    };
    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        this.getData(season);
    }
/*
    lapsList() {

        return this.state.laps.map((data) => {
          return (
            <View><Text>{data.time}</Text></View>
          )
        })
    
    }*/
    

    renderListRaces(results) {
      Moment.locale('pt');
       console.log(results);
       let values = [];
       results.map((data) => {
        values.push(
            <Fragment key={`fragment-${data.round}`} >
                <Card key={'season'} >
                    <CardItem button onPress={() => this.props.navigation.navigate('DetailRace', {
                      dadosCorrida: data,
                      })} >
                        <Body>
                        <Text>{`${data.raceName} - Data: ${Moment(data.date).format('DD/MM/YYYY')}`}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Fragment>
        );
        });
        return values;
    }

    getData(season) {
        fetch(`http://ergast.com/api/f1/${season}.json`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    results: data.MRData.RaceTable.Races,
                });
            });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
          }

        return (
            <Container>
            <Content >
            <View><Text><H1>{`  Formula 1 - Corridas`}</H1></Text></View>
            <SafeAreaView>
                <View>
                    {this.renderListRaces(this.state.results)}
                </View>
                </SafeAreaView>   
            </Content>
        </Container>
            
        );
    }

}