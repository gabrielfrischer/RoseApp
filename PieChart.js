import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, Card, CardItem, Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import PureChart from 'react-native-pure-chart';
import Font from 'expo';
import { StatusBar } from 'react-native';
import { StyleSheet, Image } from 'react-native';
import moment from 'moment';
import ChartView from 'react-native-highcharts';




 class PieChart extends Component {


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
      var Highcharts='Highcharts';
      var conf={
              chart: {
                  type: 'pie',
                  animation: Highcharts.svg, // don't animate in old IE
                  marginRight: 10,
                  events: {
                      load: function () {
  
                          // set up the updating of the chart each second
                          var series = this.series[0];
                          setInterval(function () {
                              var x = (new Date()).getTime(), // current time
                                  y = Math.random();
                              series.addPoint([x, y], true, true);
                          }, 10000/*mss*/);
                      }
                  }
              },
              title: {
                  text: 'Daily Activity Breakdown'
              },
              xAxis: {
                  type: 'datetime',
                  tickPixelInterval: 15000
              },
              yAxis: {
                  title: {
                      text: 'Value'
                  },
                  plotLines: [{
                      value: 0,
                      width: 1,
                      color: '#808080'
                  }]
              },
              tooltip: {
                  formatter: function () {
                      return '<b>' + this.series.name + '</b><br/>' +
                          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                          Highcharts.numberFormat(this.y, 2);
                  }
              },
              legend: {
                  enabled: false
              },
              exporting: {
                  enabled: false
              },
              series: [{
                  name: 'Random data',
                  data: (function () {
                      // generate an array of random data
                      var data = [],
                          time = (new Date()).getTime(),
                          i;
  
                      for (i = -5; i <= 0; i += 1) {
                          data.push({
                              x: time + i * 10000,
                              y: Math.random()
                          });
                      }
                      return data;
                  }())
              }]
          };
  
      const options = {
          global: {
              useUTC: false
          },
          lang: {
              decimalPoint: ',',
              thousandsSep: '.'
          }
      };
  
      return (
        <ChartView style={{height:200}} config={conf} options={options}></ChartView>
      );
  }
}
;

export default PieChart