import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, Card, CardItem, Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import PureChart from 'react-native-pure-chart';
import Font from 'expo';
import { StyleSheet, Image } from 'react-native';
import moment from 'moment';
import { TabNavigator } from 'react-navigation';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  }
});



 const Tabs = TabNavigator({
  Home: {
    screen: Tab2,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Icon style={styles.icon} name="home" />
      ),
    }
  },
  Stats: {
    screen: Tab1,
    navigationOptions: {
      tabBarLabel: 'Status',
      tabBarIcon: () => (
        <Icon style={styles.icon} name="ios-analytics-outline" />
      ),
    }
    },
  Settings: {
    screen: Tab3,
    navigationOptions: {
      tabBarLabel: 'Articles',
      tabBarIcon: () => (
        <Icon style={styles.icon} name="ios-bookmarks-outline" />
      ),
    }
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
      activeTintColor: '#3278eb',
      inactiveTintColor: '#cccccc',
      showIcon: true,
      showLabel: true,
      style: {
          backgroundColor: 'white'
      },
      pressColor: '#d5dcea',
      indicatorStyle: {
          backgroundColor: '#3278eb'
      }
  }
},
{
  initialRouteName: 'Stats',
});

export default Tabs;

