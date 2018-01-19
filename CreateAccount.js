import React, { Component } from 'react';
import { Container, Title, Content, Card, CardItem, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';
import PureChart from 'react-native-pure-chart';
import Font from 'expo';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Image } from 'react-native';

export default class CreateAccount extends Component {



    state={
      isReady: false
    }
  
    async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({isReady:true})
  }
    
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Content>
<Form style={{backgroundColor:'#fff'}}>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input />
              </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Text>{"\n"}</Text>
            <Button success full large>
            <Text>Create Account</Text>
          </Button>
            
          </Form>

        </Content>
      </Container>
    );
  }
}
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonBlockRow: {
    height: 400, 
    flexDirection: 'column',

  },
  buttonBlockCol: {
    alignItems:'center',
    justifyContent:'center',
    width:400, 
  },
});
