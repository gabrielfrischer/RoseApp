import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, ListItem, FooterTab, Button, Left, Right, Body, Icon, Text, H1, H2, H3, Picker, Form, Item as FormItem } from 'native-base';
import {Font,LinearGradient} from 'expo';
import { StyleSheet, Image, TouchableHighlight, View, Dimensions, ScrollView, FlatList } from 'react-native';



export default class Counter extends Component {
  constructor() {
    super();
    this.state = {count: 0};
  }

  _incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  _decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
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
      'comfortaaBold': require('./assets/fonts/Comfortaa-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
    
    
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.centerIt}>
        <View
          style= {[
            styles.singleHabit,
            {backgroundColor: this.props.color}
          ]}
        >
          <Text style={styles.habitNameText}>{this.props.text}</Text>
          <Text style={styles.countText}>{this.state.count}</Text>
        </View>
        <View>
              <Button large rounded bordered primary onPress={ () => this._incrementCount() }><Text> Count Interruption </Text></Button>
              <View style={{height:50}}></View>
              <Button style={styles.centerButton} block rounded small bordered danger onPress={ () => this._decrementCount() }><Text> Subtract Interruption </Text></Button>
              
          </View>
      </View>
      
    );
  }
}
;





const styles = StyleSheet.create({
  centerIt:{
    alignItems:'center',
    flexDirection:'column',
    justifyContent: 'center',
    height:Dimensions.get('window').height/4
  },
  centerIt:{
    alignItems:'center',
    flexDirection:'column',
    justifyContent: 'center',
  },
  countText: {
    fontSize:46,
    color:'black',
  }
});

