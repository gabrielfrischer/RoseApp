import React, { Component } from 'react';
import { Container, Title, Content, Card, CardItem, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';
import PureChart from 'react-native-pure-chart';
import Font from 'expo';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Image } from 'react-native';







export default class Login extends Component {



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
              <Label>Subject Name/ID</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Subject Age</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Subject Height</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Subject Weight</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Optional Notes</Label>
              <Input />
            </Item>
            <Text>{"\n"}</Text>
            <Button primary full large onPress={() => {
              this.props.navigation.navigate("Step1")
          }} >
            <Text>Begin FAB Test</Text>
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
