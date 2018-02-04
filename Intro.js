import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import PureChart from 'react-native-pure-chart';
import {Font} from 'expo';
import { StatusBar } from 'react-native';
import { StyleSheet, Image } from 'react-native';
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
      <Container>
                 <StatusBar barStyle = "dark-content" hidden = {true}/>

             <Image source={require('./assets/images/wallpaper.png')} style={styles.wallpaperIntro}>
</Image>
        <Content>
        <Grid>

        <Row style={{ height: 90 }}>



</Row>

<Row style={styles.libraLogo}>
<Image
      source={require('./assets/images/blackLibra.png')}
      style={{ height: 160, width: 160 }}
    />
    {
this.state.fontLoaded ? (
  <Text style={{ fontFamily: 'comfortaa', fontSize: 56, color:'white' }}>
    Libra&trade;
  </Text>
) : null
}
{
this.state.fontLoaded ? (
  <Text style={{ fontFamily: 'comfortaa', fontSize: 20, color:'white' }}>
    Dr. Rose App
  </Text>
) : null
}
</Row>
<Row style={{ height: 90 }}>



</Row>


<Row style={styles.buttonBlockRow}>
<Col style={styles.buttonBlockCol}>
<Button primary block onPress={() => {
            this.props.navigation.navigate("Login")
          }}><Text>Start</Text></Button>
          <Row style={{ height:10 }}>
</Row>
 </Col>
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
  buttonBlockRow: {
    height: 290, 
    alignItems:'center',
    flexDirection: 'column',

  },
  buttonBlockCol: {
    alignItems:'center',
    justifyContent:'center',
    width:340, 
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
