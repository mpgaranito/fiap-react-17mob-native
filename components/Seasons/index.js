import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
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
      
        for(let i = 0; i < 19; i++) {
            const year = '20' + (i > 9 ? i : `0${i}`);
            console.log(year);
            items.push(
                <Button 
                onPress = {() =>  this.props.handleParam(year)}
                    key={ `season-${i}` }>
                    <Text>
                        { year }
                    </Text>
                </Button>
            );
        }
        return items;
    }

    render() {
        return (
            <View style={ style.container }>
                { this.renderSeasons() }
            </View>
        );
    }
}

export default Seasons;