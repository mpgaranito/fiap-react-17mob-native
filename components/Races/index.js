import React, { PureComponent} from 'react';
import { View } from 'react-native';
import { Container, Content, H1, Button, Icon, Text } from 'native-base';
import style from './style';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class Races extends PureComponent {
    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        }); //resolve fonts problems
    }

 
      
       

    render() {
        return (
            <Container>
                <Content >
                    <View style={style.container}>
                        {this.renderListRaces()}
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Races;