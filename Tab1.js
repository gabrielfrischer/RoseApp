import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, Card, CardItem, Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import PureChart from 'react-native-pure-chart';
import Font from 'expo';
import { StatusBar } from 'react-native';
import { StyleSheet, Image } from 'react-native';
import moment from 'moment';
import ChartView from 'react-native-highcharts';
import SplineChart from './SplineChart';
import Accel from './Accel';
import Gyro from './Gyro';
import Magneto from './Magneto';





 export default class Tab1 extends Component {


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
        <Header style={styles.headerPadding}>
          <Left>
            <Button transparent info>
              <Icon name='ios-analytics-outline' />
            </Button>
          </Left>
          <Body>
            <Title>Status</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <SplineChart/>
        <Accel/>
        <Gyro/>
        <Magneto/>
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
});
