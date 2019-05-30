import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, ListItem, CheckBox, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { SafeAreaView } from 'react-navigation';

export default class Season extends React.Component {

    state = {
        results: [],
    };

    static navigationOptions = () => {
        return {
            title: 'Seasons',
        };
    }

    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        const name = this.props.navigation.getParam('name');
        //console.log(season, name);
        this.getData(season);
    }

    renderSeasons(results) {

        let values = [];

       console.log(results);

        values.push(
       
            <ListItem key={'season'}>
                <CheckBox checked={true} color="green" />
                <Body>
                    <Text>{results.raceName}</Text>
                </Body>
            </ListItem>

        );

        return values;
    }

    getData(season) {
        fetch(`http://ergast.com/api/f1/${season}.json`)
            .then((response) => response.json())
            .then((data) => {
                //console.log(data.MRData.series);
                //console.log(data.MRData.RaceTable.Races);
                this.setState({
                    results: data.MRData.RaceTable.Races,
                });
            });
    }

    render() {
        const { results } = this.state
        return (
            <SafeAreaView>
                {this.state.results.map(this.renderSeasons)}
            </SafeAreaView>
        );
    }
}