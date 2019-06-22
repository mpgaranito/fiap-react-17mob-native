import React, { PureComponent} from 'react';
import { View } from 'react-native';
import { Container, Content, H1, Button, Icon, Text } from 'native-base';
import style from './style';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class Seasons extends PureComponent {
    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        }); //resolve fonts problems
    }

    renderSeasons() {
        let items = [];
        var yearNow= new Date().getFullYear();
        console.log(yearNow);
        for (let year = 2000; year < yearNow; year++) {
            items.push(
                <Button iconLeft transparent  dark
                    onPress={() => this.props.handleParam(year)}
                    key={`season-${year}`} style={{backgroundColor:'#fff'}}>
                    <Icon name='arrow-forward' />
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
                <Content >
                <View><Text><H1>Formula One - Seasons</H1></Text></View>
                    <View style={style.container}>
                        {this.renderSeasons()}
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Seasons;