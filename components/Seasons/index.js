import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import style from './style';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class Seasons extends PureComponent {
    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
    }

    renderSeasons() {

        let items = [];

        for (let i = 0; i < 19; i++) {
            const year = '20' + (i > 9 ? i : `0${i}`);
            console.log(year);
            items.push(
                <Button iconLeft transparent primary
                    onPress={() => this.props.handleParam(year)}
                    key={`season-${i}`}>
                
                    <Icon name='checkmark' />
                    <Text>
                        {year}
                    </Text>
                   
                </Button>
 
            );
        }
        return items;
    }

    render() {
        return (
            <Container>
                <Header dark><Text>Formula One</Text></Header>
                <Content >
                    <View style={style.container}>
                        {this.renderSeasons()}
                    </View>
                </Content>
              
            </Container>
        );
    }
}

export default Seasons;