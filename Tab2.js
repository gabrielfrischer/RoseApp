import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, Card, CardItem, Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text, H1, H2, H3, } from 'native-base';
import Font from 'expo';
import { StyleSheet, Image, TouchableHighlight, View } from 'react-native';
import moment from 'moment';
import PieChart from './PieChart';
import Slider from "react-native-slider"; // 0.11.0





export default class Tab2 extends Component {


    state={
      isReady: false,
      value:0.2
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
        <Header style={styles.headerPadding}>
          <Left>
            <Button transparent info>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
      <PieChart/>
        <Text style={{fontSize:42, textAlign:'center'}}>Hello, Richard<Icon style={{ fontSize:30 }} name='md-happy'/></Text>
        <Text style={{fontSize:22, textAlign:'center'}}>Below are your weekly stats</Text>
        <Text style={{fontSize:12, textAlign:'center'}}>Last UPDATED: 2 minutes ago</Text>
          <Card> 
          <View style={{height:100, justifyContent:'center'}}>
          <View style={styles.slider}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
      </View>
          </View>
            <CardItem cardBody>
            <Left>
            <Icon name='ios-body' style={{fontSize:60, marginLeft:20,marginTop:20}} />
          </Left>
          <Body>
          <Text success style={{marginTop:55, fontSize:36, width:200}}>Balance</Text>
          <Text success style={{fontSize:12, width:200}}>For the Past Week</Text>

         
          </Body>
              <Right style={{marginRight:15}}>
              <Text style={{marginTop:55, fontSize:36}}><Icon style={{ fontSize:30 }} name='ios-arrow-round-up'/> {this.state.value}%</Text>
              </Right>
              </CardItem>
            <CardItem>
            <Left>
          </Left>
          <Body>
            <Title></Title>
          </Body>
              <Right>
              <Button iconRight transparent onPress={() => {
            this.props.navigation.navigate("Balance")
          }}>
            <Text></Text>
            <Icon name='ios-arrow-dropright' style={{fontSize:50}} />
          </Button>
              </Right>
            </CardItem>
          </Card>
          <Card> 
            <CardItem cardBody>
            <Left>
            <Icon name='md-contact' style={{fontSize:60, marginLeft:20,marginTop:20}} />
          </Left>
          <Body>
          <Text success style={{marginTop:55, fontSize:36, width:200}}>Strength</Text>
          <Text success style={{fontSize:12, width:200}}>For the Past Week</Text>
          </Body>
              <Right style={{marginRight:15}}>
              <Text style={{marginTop:55, fontSize:36}}><Icon style={{ fontSize:30 }} name='ios-arrow-round-up'/> 2%</Text>
              </Right>
              </CardItem>
            <CardItem>
            <Left>
          </Left>
          <Body>
            <Title></Title>
          </Body>
              <Right>
              <Button iconRight transparent iconRight transparent onPress={() => {
            this.props.navigation.navigate("Strength")
          }}>
            <Text></Text>
            <Icon name='ios-arrow-dropright' style={{fontSize:50}} />
          </Button>
              </Right>
            </CardItem>
          </Card>
          <Card> 
            <CardItem cardBody>
            <Left>
            <Icon name='md-walk' style={{fontSize:60, marginLeft:20,marginTop:20}} />
          </Left>
          <Body>
          <Text success style={{marginTop:55, fontSize:36, width:200}}>Mobility</Text>
          <Text success style={{fontSize:12, width:200}}>For the Past Week</Text>
          </Body>
              <Right style={{marginRight:15}}>
              <Text style={{marginTop:55, fontSize:36}}><Icon style={{ fontSize:30 }} name='ios-arrow-round-up'/> 2%</Text>
              </Right>
              </CardItem>
            <CardItem>
            <Left>
          </Left>
          <Body>
            <Title></Title>
          </Body>
              <Right>
              <Button iconRight transparent iconRight transparent onPress={() => {
            this.props.navigation.navigate("Mobility")
          }}>
            <Text></Text>
            <Icon name='ios-arrow-dropright' style={{fontSize:50}} />
          </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
;





const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
  cardRound: {
    width:390,
  },
  centerIt:{
    alignItems:'center',
  },
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});

