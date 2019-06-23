import React, { Fragment} from 'react';
import { Container, Content, H1,  Text, Button, Card, CardItem, Body } from 'native-base';
import { View } from 'react-native';
import {SafeAreaView} from 'react-navigation';


export default class  RacingDrivers extends React.Component {

    state = {
        results: [],
    };
    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        this.getData(season);
    }



    renderListPilots(results) {
       console.log(results);
       let values = [];
       results.map((data) => {
        values.push(
            <Fragment key={`fragment-${data.driverId}`} >
                <Card key={'season'} >
                    <CardItem button onPress={() => this.props.navigation.navigate('DetailDrive', {
                        dadosPiloto: data,
                      })} >
                        <Body>
                        <Text>{data.givenName} {data.familyName}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Fragment>
        );
        });
        return values;
    }

    getData(season) {
        fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    results: data.MRData.DriverTable.Drivers,
                });
            });
    }

    render() {
       

        return (
            <Container>
            <Content >
            <View><Text><H1>{`  Formula 1 - Pilotos`}</H1></Text></View>
            <SafeAreaView>
                <View>
                    {this.renderListPilots(this.state.results)}
                </View>
                </SafeAreaView>   
            </Content>
        </Container>
            
        );
    }

}