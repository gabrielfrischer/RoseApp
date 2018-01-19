import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, Card, Separator, CardItem, Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import PureChart from 'react-native-pure-chart';
import Font from 'expo';
import { StatusBar } from 'react-native';
import { StyleSheet, Image, View, WebView } from 'react-native';
import moment from 'moment';
import { TabNavigator } from 'react-navigation';





 export default class Strength extends Component {

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
                <Text style={{marginTop:55, marginLeft:15, fontSize:36, width:200}}>Strength</Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                <Text style={{fontSize:16, marginLeft:15, width:340}}>How well and controlled your motion is when going against an opposite force such as when sitting, standing, kneeling, or squatting. It is a reflection of your core strength.</Text>
                </Text>
              </Body>
            </CardItem>
          </Card>
         
<Card>
          <PureChart type={'line'} data={this.state.data} />
          <PureChart type={'bar'} data={this.state.data} />
          <Button bordered full title='Generate Strength Chart' onPress={this.generateData}>
            <Text>Generate Strength Chart</Text>
          </Button>
</Card>


<Card> 
<CardItem>
  <Body>
<Text style={{marginTop:10, marginLeft:15, fontSize:21, width:340}}>Tips to Improve Your Strength</Text>
  </Body>
</CardItem>
</Card>

{/* Level 1 - Low Risk Activity for High Risk Individuals*/}
<Card> 
<CardItem>
  <Body>
<Text style={{marginTop:10, marginLeft:15, fontSize:21, width:340}}>Tips to Improve Your Upper Body Strength</Text>
  </Body>
</CardItem>
</Card>

<Card>
<CardItem>
    <Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Wall Pushups - Level 2</Text>
  </Body>
  </CardItem>
  <CardItem>
    <Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>Face a wall, standing a little farther than arm’s length away, feet shoulder-width apart.
Lean your body forward and put your palms flat against the wall at shoulder height and shoulder-width apart.
Slowly breathe in as you bend your elbows and lower your upper body toward the wall in a slow, controlled motion. Keep your feet flat on the floor.
</Text>
  </Body>
  </CardItem>
  <CardItem cardBody style={{justifyContent:'center'}}>
  <Image
  source={require('./assets/images/wallPushups.gif')}
  style={{ width: 400 }}
/>            
</CardItem>
</Card>

{/* Level 1 - Calf Raise */}
<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Calf Raises - Level 1</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>Stand facing a wall or back of chair and lightly hold onto it with fingertips to aid balance. Legs should be shoulder-width apart and straight. Do not lock knees. </Text>
</Body>
</CardItem>
  <CardItem cardBody style={{justifyContent:'center'}}>
  <Image
  source={require('./assets/images/calfRaises.gif')}
  style={{ width:300 }}
/>            
</CardItem>
</Card>



{/* Level 1 - Step Touch */}
<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Step Touch - Level 1</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>Stand tall with your back straight, abs engaged, shoulders relaxed and elbows pointing behind you, palms next to your waist.</Text>
</Body>
</CardItem>
  <CardItem cardBody style={{justifyContent:'center'}}>
  <Image
  source={require('./assets/images/stepTouch.gif')}
  style={{ width: 300 }}
/>            
</CardItem>
</Card>


{/* Level 2 - Chair Squats */}
<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Chair Sqauts - Level 2</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>Stand in front of a chair with your feet hip-width apart.
Keep your knees over your feet. Slowly lower your buns toward the chair without actually sitting down.
Be sure to tighten your abdominals to help support your back. Keep your knees over your ankles and place your weight in your heels throughout the full range of motion.
Placing your arms out in front of you may help your balance. Straighten your body upright and repeat.
Beginners can try 1 set of 8 to 10 reps. More conditioned exercisers can try 3 sets of 10 to 12 reps.</Text>
</Body>
</CardItem>
  <CardItem cardBody style={{justifyContent:'center'}}>
  <Image
  source={require('./assets/images/chairSquat.gif')}
  style={{ width:400 }}
/>            
</CardItem>
</Card>

{/* Level 2 - Leg Raises */}
<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Leg Raises - Level 2</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15,marginTop:15}}>Increase your core strength</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>Lie on your back with one knee bent and one knee straight, toes pointing upward to the ceiling.
Be sure to tighten your abdominals to help support your back. Raise your  straightened leg to the level of the other bent knee.
Beginners can try 1 set of 8 to 10 reps. More conditioned exercisers can try 3 sets of 10 to 12 reps.</Text>
</Body>
</CardItem>
  <CardItem cardBody style={{justifyContent:'center'}}>
  <Image
  source={require('./assets/images/legraise.gif')}
  style={{ width:400 }}
/>            
</CardItem>
</Card>

{/* Level 3 - Stretch Exercise*/}
<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>Back Strengthening - Level 3</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>Flexibility is a core part to a healthy body. Follow Eve White for a short Back Stretch and Strengthening Exercise</Text>
</Body>
</CardItem>
  <CardItem  style={{justifyContent:'center'}}> 
    <Body>
  <WebView
    style={{width:370, height:260, marginRight:30}}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/EsOX-yUZLgY?rel=0&autoplay=0&showinfo=0&controls=1'}}
/>
</Body>
</CardItem>
</Card>

{/* Level 3 - High Knees*/}
<Card>
<CardItem>
<Body>
<Text style={{fontSize:22, marginLeft:15,marginTop:15}}>High Knees</Text>
</Body>
</CardItem>
<CardItem>
<Body>
<Text style={{fontSize:16, marginLeft:15, color:'black'}}>This exercise will help improve your abdominal strength and quadraceptors strengths. Repeat 10 times on each leg.</Text>
</Body>
</CardItem>
  <CardItem  style={{justifyContent:'center'}}> 
    <Body>
  <WebView
    style={{width:370, height:260, marginRight:30}}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/NvweN5VszlE?rel=0&autoplay=0&showinfo=0&controls=1'}}
    
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
