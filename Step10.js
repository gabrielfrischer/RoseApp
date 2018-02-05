import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, ListItem, FooterTab, Button, Left, Right, Body, Icon, Text, H1, H2, H3, Picker, Form, Item as FormItem } from 'native-base';
import {Font,LinearGradient} from 'expo';
import { StyleSheet, Image, TouchableHighlight, View, Dimensions, ScrollView, FlatList } from 'react-native';
import moment from 'moment';
//import PieChart from './PieChart';
import Slider from "react-native-slider"; // 0.11.0
import { Col, Row, Grid } from "react-native-easy-grid";
import Counter from "./CounterStep10"



const Item = Picker.Item;
export default class Step10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected5: "key0"
    };
  }
  onValueChange5(value: string) {
    this.setState({
      selected5: value
    });
  }

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
      'comfortaaBold': require('./assets/fonts/Comfortaa-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
    
    
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Content>
        <Row style={styles.headerGradientBox}>
          <LinearGradient
          colors={['#b066fe', '#8aa4ff', '#63e2ff']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: Dimensions.get('window').height/3,
            width: Dimensions.get('window').width

          }}>
        </LinearGradient>
        

          {
this.state.fontLoaded ? (
  <Text style={{ fontFamily: 'comfortaaBold', fontSize: 40, color:'white' }}>
    Step 10
  </Text>
) : null
}
{
  this.state.fontLoaded ? (
    <Text style={{ fontFamily: 'comfortaaBold', fontSize: 18, color:'white', textAlign:'center' }}>
      Reactive postural control
    </Text>
  ) : null
  }
  {
  this.state.fontLoaded ? (
    <Text style={{ fontFamily: 'comfortaaBold', fontSize: 10, color:'white' }}>
      Score from 0 to 4 below and then go to the next step.
    </Text>
  ) : null
  }
          </Row>

          <Form style={{backgroundColor:"white"}}>
            <Picker
              mode="dropdown"
              headerStyle={{ backgroundColor: "white" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={this.state.selected5}
              onValueChange={this.onValueChange5.bind(this)}
            >
              <Item label="Assign Score of 0" value="key0" />
              <Item label="Assign Score of 1" value="key1" />
              <Item label="Assign Score of 2" value="key2" />
              <Item label="Assign Score of 3" value="key3" />
              <Item label="Assign Score of 4" value="key4" />
            </Picker>
          </Form>
          <Counter/>
        </Content>
        <Footer>
          <FooterTab>
          <Button vertical full onPress={() => {
              this.props.navigation.navigate("Summary")
          }}>
          <Icon name="ios-return-right-outline" />
          <Text>Complete Test and View Summary</Text>
        </Button>
          </FooterTab>
        </Footer>
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
    flexDirection:'row'
  },
  leftCenterGradientText: {
    fontSize:46,
    color:'white',
  },
  headerGradientBox:{
    height: Dimensions.get('window').height/3,
    width: Dimensions.get('window').width,
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection:'column'
  },
});

