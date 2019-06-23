import React, { PureComponent,Fragment} from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container, Content, H1, Button, Icon, Text , Separator, List,ListItem} from 'native-base';
import style from './style';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class Menus extends PureComponent {
    state = {
		season: '',
	};
    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        }); //resolve fonts problems
    }
    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        this.setState({ season: season });
        console.info("passei"+season);
        }
    
    renderOptions() {
        const {navigate} = this.props.navigation;
        return  (
        
          <List>
              <ListItem iconLeft block   onPress={() =>  navigate('Races', {
                season: this.state.season,
              })}>
                  <Icon name='car' />
                  <Text>
                      {` Corridas`}
                  </Text>
              </ListItem>
              <ListItem iconLeft block onPress={() =>  navigate('Drivers', {
                season: this.state.season,
              })}>
                  <Icon name='speedometer' />
                  <Text>
                      {` Pilotos`}
                  </Text>
              </ListItem>
          </List>
          
            );
        }
    
    
    render() {
        return (
            <Container>
                <Content >
                <View><Text><H1>{`  Formula 1 - Menu Inicial`}</H1></Text></View>
                    <View style={style.container}>
                        {this.renderOptions()}
                    </View>
                </Content>
            </Container>
        );
    }

}
 
export default withNavigation(Menus);