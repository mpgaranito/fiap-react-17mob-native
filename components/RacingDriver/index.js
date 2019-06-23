import React, { PureComponent} from 'react';
import { View } from 'react-native';
import { Container, Content, H1, Button, Icon, Text ,List,ListItem} from 'native-base';
import style from './style';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class RacingDriver extends PureComponent {
    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        }); //resolve fonts problems
    }

    
       
       // console.log(yearNow);
       
   
    render() {
        return (
            <Container>
                <Content >
                <View><Text><H1>Formula 1 - Pilotos</H1></Text></View>
                    <View style={style.container}>
                    <Text>Sou eu Piloto</Text>    
                    </View>
                </Content>
            </Container>
        );
    }
}

export default RacingDriver;