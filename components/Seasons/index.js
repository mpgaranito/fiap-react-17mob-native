import React, { PureComponent,Fragment} from 'react';
import { View } from 'react-native';
import { Container, Content, H1, Button, Icon, Text, Separator, List,ListItem } from 'native-base';
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
       // console.log(yearNow);
        for (let year = yearNow-1; year > 2000; year--) {
            items.push(
                <Fragment key={`fragment-${year}`} >
                <List> 
                <ListItem iconLeft block onPress={() => this.props.handleParam(year)}
                key={`season-${year}`}>
                <Icon name='md-arrow-dropright' />
                <Text  >
                    {` ${year}`}
                </Text>
                </ListItem>
                </List>
                </Fragment>
            );
        }
        return items;
    }
    render() {
        return (
            <Container>
                <Content >
                <View><Text><H1>Formula 1 - Temporadas</H1></Text></View>
                    <View style={style.container}>
                        {this.renderSeasons()}
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Seasons;