import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import PureChart from 'react-native-pure-chart';
import {Font} from 'expo';
import { StatusBar } from 'react-native';
import { StyleSheet, Image, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";





export default class Intro extends Component {
 
    state={
      isReady: false,
      fontLoaded: false
    }
  
    async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({isReady:true})
  }


  async componentDidMount() {
    await Font.loadAsync({
      'comfortaa': require('./assets/fonts/Comfortaa-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
    
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container style={{justifyContent:'center'}}>
        <Header style={styles.headerPadding}>
          <Left>
            <Button transparent info>
              <Icon name='ios-analytics-outline' />
            </Button>
          </Left>
          <Body>
            <Title>Article For You</Title>
          </Body>
          <Right />
        </Header>
    
        <Content>
        
        <Grid>

        <Row style={{ height: 55 }}>
        <Text style={{fontSize:21, color:'gray',textAlign:'center'}}>We Picked Out 5 Interesting Articles For You to Enjoy!</Text>

</Row>

{/* Article One */}
<Row style={{justifyContent:'center',flexDirection:'column'}}>
<View>
<Col style={styles.buttonBlockCol}>
<Col style={styles.buttonBlockColInner}>
{
  this.state.fontLoaded ? (
    <Text style={{ fontFamily: 'comfortaa', fontSize: 18, color:'black' }}>
      Leading Experts Discovers 7 Dimensions of Well-Being
    </Text>
  ) : null
  }
</Col>
<Col style={styles.buttonBlockColInner}>
<Image
      source={require('./assets/images/seven_dimensions.png')}
      style={{ height: 160, width: 350 }}
    />
</Col>
</Col>
</View>

{/* Article Two */}
<View>
<Col style={styles.buttonBlockCol}>
<Col style={styles.buttonBlockColInner}>
{
  this.state.fontLoaded ? (
    <Text style={{ fontFamily: 'comfortaa', fontSize: 18, color:'black' }}>
      7 Inventions that Will Change The Future
    </Text>
  ) : null
  }
</Col>
<Col style={styles.buttonBlockColInner}>
<Image
      source={require('./assets/images/innovation_article.png')}
      style={{ height: 160, width: 350 }}
      // https://www.argentum.org/magazine-articles/7-innovations-changing-aging-experience/
    />
</Col>
</Col>
</View>

{/* Article Three */}
<View>
<Col style={styles.buttonBlockCol}>
<Col style={styles.buttonBlockColInner}>
{
  this.state.fontLoaded ? (
    <Text style={{ fontFamily: 'comfortaa', fontSize: 18, color:'black' }}>
      25 Best Place to Live According to AARP
    </Text>
  ) : null
  }
</Col>
<Col style={styles.buttonBlockColInner}>
<Image
      source={require('./assets/images/AARP.png')}
      style={{ height: 160, width: 350 }}
      // https://www.aarp.org/home-family/friends-family/info-2017/25-best-places-to-retire-fd.html
    />
</Col>
</Col>
</View>


{/* Article Four */}
<View>
<Col style={styles.buttonBlockCol}>
<Col style={styles.buttonBlockColInner}>
{
  this.state.fontLoaded ? (
    <Text style={{ fontFamily: 'comfortaa', fontSize: 18, color:'black' }}>
      How to Best Enjoy Live at the Comfort of Your Own Home
    </Text>
  ) : null
  }
</Col>
<Col style={styles.buttonBlockColInner}>
<Image
      source={require('./assets/images/helping.png')}
      style={{ height: 160, width: 350 }}
      // http://www.charlotteobserver.com/opinion/op-ed/article31129763.html
    />
</Col>
</Col>
</View>

{/* Article Four */}
<View>
<Col style={styles.buttonBlockCol}>
<Col style={styles.buttonBlockColInner}>
{
  this.state.fontLoaded ? (
    <Text style={{ fontFamily: 'comfortaa', fontSize: 18, color:'black' }}>
      What is Active Living, and Why is it Important
    </Text>
  ) : null
  }
</Col>
<Col style={styles.buttonBlockColInner}>
<Image
      source={require('./assets/images/activeliving.png')}
      style={{ height: 160, width: 350 }}
      // http://www.activelivingcoalition.org/what-is-active-living
    />
</Col>
</Col>
</View>
</Row>
</Grid>
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
  paddedTop: {
    height:20
  },
  wallpaperIntro:{
    position  : 'absolute',
		top       : 0,
		bottom    : 0,
		left      : 0,
		right     : 0,
		resizeMode: 'cover',
		zIndex    : -1
  },
  libraLogo: {
    backgroundColor: 'transparent',
    alignItems:'center',
        flexDirection: 'column',
  },
  buttonBlockRowInner: {
    height: 100, 
    alignItems:'flex-start',
    flexDirection: 'row',
    borderColor:'purple',
    borderWidth:3,

  },
  buttonBlockCol: {
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row',
    width:380, 
    borderColor:'#ffffff',
    backgroundColor: '#ffffff',
    marginTop:15,
    marginLeft:20,
    borderWidth:3,
  },
  buttonBlockColInner: {
    width:190, 
    borderColor:'#ffffff',
    backgroundColor: '#ffffff',
    justifyContent:'center',
    borderWidth:3,
  },
  row2: {
    backgroundColor: 'transparent',
    height:295
  
  },
  row3: {
    backgroundColor: 'transparent',
  
  },
  col1: {
    width:300
  
  },
  libraFont: {
    fontFamily: 'comfortaa'
  },
  buttonStyle7: {
    backgroundColor: 'white',
    borderColor: '#333',
    borderWidth: .2,
  },
  textStyle7: {
    width: 200,
    fontWeight: '500',
    color: '#333',
  },
  buttonStyle8: {
    backgroundColor: '#88d8c0',
    borderColor: '#333',
    borderWidth: .2,
  },
  textStyle8: {
    width: 200,
    fontWeight: '500',
    color: '#fff',
  },
  buttonStyle9: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: .2,
  },
  textStyle9: {
    width: 200,
    fontWeight: '500',
    color: '#333',
  },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});