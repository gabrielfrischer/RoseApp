import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text, H1, H2, H3, } from 'native-base';
import {Font,LinearGradient} from 'expo';
import { StyleSheet, Image, TouchableHighlight, View, FlatList, Dimensions } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Card } from "react-native-elements";

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];

 class HorizontalCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              title={null}
              image={{ url: "http://via.placeholder.com/160x160" }}
              containerStyle={{ padding: 0, width: Dimensions.get('window').width-35, borderRadius:15 }}
            >
              <Text style={{ marginBottom: 10 }}>
                hello
              </Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

export default HorizontalCards;