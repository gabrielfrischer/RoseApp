import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, Card, Separator, CardItem, Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import PureChart from 'react-native-pure-chart';
import Font from 'expo';
import { StatusBar, WebView } from 'react-native';
import { StyleSheet, Image, View } from 'react-native';
import moment from 'moment';
import { TabNavigator } from 'react-navigation';





 export default class Mobility extends Component {

  constructor (props) {
    super(props)
    this.generateData = this.generateData.bind(this)
    this.state = {
      data: []
    }
  }

  generateData () {
    var data = []
    var data2 = []
    var data3 = []
    var startDate = moment()
    for (var i = 0; i < Math.round(Math.random() * 10) + 30; i++) {
      startDate.add(1, 'days')
      data.push(
        {
          x: startDate.format('YYYY-MM-DD'),
          y: Math.round(Math.random() * 500)
        }
      )
      data2.push(
        {
          x: startDate.format('YYYY-MM-DD'),
          y: Math.round(Math.random() * 1000)
        }
      )
      data3.push(
        {
          x: startDate.format('YYYY-MM-DD'),
          y: Math.round(Math.random() * 1000)
        }
      )
    }

    this.setState({data: [
      {seriesName: 'test', data: data, color: '#63E2FF'},
       {seriesName: 'test2', data: data2, color: '#B066FE'},
       {seriesName: 'test3', data: data3, color: '#00FFFF'}
    ]})
  }


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
         <StatusBar barStyle = "dark-content" hidden = {true}/>
        <Content>
          <Text>
          </Text>
          <Card>
            <CardItem>
              <Body>
                <Text>
                <Text style={{marginTop:55, marginLeft:15, fontSize:36, width:200}}>Mobility</Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                <Text style={{fontSize:16, marginLeft:15, width:340}}>The evaluation of a combination of your walk symmetry, walking speed, stride lengths, and walking variability.</Text>
                </Text>
              </Body>
            </CardItem>
          </Card>
         
<Card>
          <PureChart type={'line'} data={this.state.data} />
          <PureChart type={'bar'} data={this.state.data} />
          <Button bordered full title='Generate Mobility Chart' onPress={this.generateData}>
            <Text>Generate Mobility Chart</Text>
          </Button>
</Card>
<Card> 
<CardItem>
  <Body>
<Text style={{marginTop:10, marginLeft:15, fontSize:24, width:340}}>Tips to Improve Your Mobility</Text>
  </Body>
</CardItem>
</Card>
<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Walking the Right Way - Level 1</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>See video below</Text>
</Body>
</CardItem>
  <CardItem  style={{justifyContent:'center'}}> 
    <Body>
  <WebView
    style={{width:370, height:260, marginRight:30}}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/-fD2TSL2s7I?rel=0&autoplay=0&showinfo=0&controls=0'}}
/>
</Body>
</CardItem>
</Card>

<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Walking Backwards - Level 1</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>See video below</Text>
</Body>
</CardItem>
  <CardItem  style={{justifyContent:'center'}}> 
    <Body>
  <WebView
    style={{width:370, height:260, marginRight:30}}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/fV5FZ4LDaWc?rel=0&autoplay=0&showinfo=0&controls=0%20format'}}
/>
</Body>
</CardItem>
</Card>

<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Walk on Heels and Toes - Level 2</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>See video below</Text>
</Body>
</CardItem>
  <CardItem  style={{justifyContent:'center'}}> 
    <Body>
  <WebView
    style={{width:370, height:260, marginRight:30}}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/iIfLn0pzj0o?rel=0&autoplay=0&showinfo=0&controls=0%20format'}}
/>
</Body>
</CardItem>
</Card>

<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Tandem Walk - Level 3</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>See video below</Text>
</Body>
</CardItem>
  <CardItem  style={{justifyContent:'center'}}> 
    <Body>
  <WebView
    style={{width:370, height:260, marginRight:30}}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/fqIlz8Dh5K4?rel=0&autoplay=0&showinfo=0&controls=0%20format'}}
/>
</Body>
</CardItem>
</Card>

<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Grapevine Crossover Walk - Level 3</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>See video below</Text>
</Body>
</CardItem>
  <CardItem  style={{justifyContent:'center'}}> 
    <Body>
  <WebView
    style={{width:370, height:260, marginRight:30}}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/HNbjptrn3-A?rel=0&autoplay=0&t=77&showinfo=0&controls=0%20format'}}
/>
</Body>
</CardItem>
</Card>

        </Content>
      </Container>
    );
  }
}
;





const styles = StyleSheet.create({
  cardRoundSmall: {
    width:350,
    height:200,
    elevation:3,
    borderRadius:20,
    backgroundColor:'white',
  },
  cardRoundLarge: {
    width:350,
    height:650,
    marginTop:15,
    elevation:3,
    borderRadius:20,
    backgroundColor:'white',
  },
  graphContainer: {
    width:350,
    marginTop:15,    },
  centerIt:{
    alignItems:'center',
    width:'auto',
  }
});

