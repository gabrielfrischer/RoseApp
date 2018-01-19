import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, Card, Separator, CardItem, Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import PureChart from 'react-native-pure-chart';
import Font from 'expo';
import { StatusBar } from 'react-native';
import { StyleSheet, Image, View, WebView } from 'react-native';
import moment from 'moment';
import { TabNavigator } from 'react-navigation';





 export default class Balance extends Component {

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
                <Text style={{marginTop:55, marginLeft:15, fontSize:36, width:200}}>Balance</Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                <Text style={{fontSize:16, marginLeft:15, width:340}}>A combination of how much you move side to side and front to back while standing still.</Text>
                </Text>
              </Body>
            </CardItem>
          </Card>
         
<Card>
          <PureChart type={'line'} data={this.state.data} />
          <PureChart type={'bar'} data={this.state.data} />
          <Button bordered full title='Generate Balance Chart' onPress={this.generateData}>
            <Text>Generate Balance Chart</Text>
          </Button>
</Card>
          <Card> 
          <CardItem>
            <Body>
        <Text style={{marginTop:10, marginLeft:15, fontSize:24, width:340}}>Tips to Improve Your Balance</Text>
            </Body>
          </CardItem>
          </Card>


{/* Level 1 - Postural Exercise */}
<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Postural Exercise - Level 3</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>Posture is a core part to a healthy body. Follow Physical Therapist Anne Pringle Burnell for a short Postural Balance Strengthening Exercise</Text>
</Body>
</CardItem>
  <CardItem  style={{justifyContent:'center'}}> 
    <Body>
  <WebView
    style={{width:370, height:260, marginRight:30}}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/837LbMNW5so?rel=0&autoplay=0&showinfo=0&controls=0'}}
    
/>
</Body>
</CardItem>
</Card>

          <Card>
        <CardItem>
        <Body>
  <Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Neck Rotation - Level 1</Text>
     </Body>
      </CardItem>
      <CardItem>
        <Body>
  <Text style={{fontSize:16, marginLeft:15, color:'black'}}>While sitting keep your shoulders relaxed and chin against your chest. Rotate your head five times; keep chin in contact with the chest during the rotations.</Text>
      </Body>
      </CardItem>
            <CardItem cardBody>
            <Image
            source={require('./assets/images/neckRotation.png')}
            style={{ height: 300 }}
          />            
          </CardItem>
          </Card>

          <Card>
          <CardItem>
          <Body>
    <Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Arm Circles - Level 1</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
    <Text style={{fontSize:16, marginLeft:15, color:'black'}}>Raise both arms shoulder height with palms facing upwardds. Circlearms backwards ten times, then pause and reverse.</Text>
          </Body>
        </CardItem>
            <CardItem cardBody style={{justifyContent:'center'}}>
            <Image
            source={require('./assets/images/armCircles.gif')}
            style={{ height: 400 }}
          />            
          </CardItem>
          </Card>

          <Card>
          <CardItem>
              <Body>
        <Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Standing Side Stretch - Level 2</Text>
            </Body>
            </CardItem>
            <CardItem>
              <Body>
        <Text style={{fontSize:16, marginLeft:15, color:'black'}}>Stand with feet hip width apart. Gradually slide arm down towards knee as far as is comfortable. Return to starting position and then repeat.</Text>
            </Body>
            </CardItem>
            <CardItem cardBody style={{justifyContent:'center'}}>
            <Image
            source={require('./assets/images/sideStretch.jpg')}
            style={{ height: 400 }}
          />            
          </CardItem>
          </Card>
          <Card>
          <CardItem>
              <Body>
        <Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Test Your  Balance - Level 2</Text>
            </Body>
            </CardItem>
            <CardItem>
              <Body>
        <Text style={{fontSize:16, marginLeft:15, color:'black'}}>Take a short and fun Balance Test with Joshua Brostoff to see how you can improve! *Please Be Sure to have someone by your side when you feel unstable*</Text>
            </Body>
            </CardItem>
            <CardItem style={{justifyContent:'center'}}>
            <WebView
             style={{width:370, height:260, marginRight:30}}
            javaScriptEnabled={true}
            source={{uri: 'https://www.youtube.com/embed/_c3UvnauWb4?rel=0&autoplay=0&showinfo=0&controls=0'}} />         
          </CardItem>
          </Card>
          <Card>
          <CardItem>
          <Body>


    <Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Liftoff - Level 3</Text>
        </Body>
        </CardItem>
        <CardItem>
          <Body>
    <Text style={{fontSize:16, marginLeft:15, color:'black'}}>Stand with feet together, arms by sides.
Hinge forward from hips until back is parallel to ground, arms extended down.
Simultaneously lift left leg behind you and raise arms directly out to sides.
Maintaining hinge position, lower arms and leg so that they are a few inches off ground; repeat for 1 minute. Switch legs for next circuit.</Text>
        </Body>
        </CardItem>
            <CardItem cardBody style={{justifyContent:'center'}}>
            <Image
            source={require('./assets/images/liftoff.png')}
            style={{  }}
          />            
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
