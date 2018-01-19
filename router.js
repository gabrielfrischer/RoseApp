import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Intro from './Intro.js';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Purchase from './Purchase';
import Graphs1 from './Graphs1';
import Balance from './Balance';
import Strength from './Strength';
import Mobility from './Mobility';



const RootNavigator = StackNavigator({
  Intro: {
    screen: Intro,
    navigationOptions: {
      header: null
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
        headerTitle: 'Login',
      },
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
        headerTitle: 'Create Account',
      },
  },
  Purchase: {
    screen: Purchase,
    navigationOptions: {
        headerTitle: 'Purchase your Libra',
      },
  },
  Graphs1: {
    screen: Graphs1,
    navigationOptions: {
      header: null
    },
  },
  Balance: {
    screen: Balance,
    navigationOptions: {
        headerTitle: 'Balance',
      },
  },
  Strength: {
    screen: Strength,
    navigationOptions: {
        headerTitle: 'Strength',
      },
  },
  Mobility: {
    screen: Mobility,
    navigationOptions: {
        headerTitle: 'Mobility',
      },
  },
});





/*

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: 'blue',
  },
    
  },
});

*/

export default RootNavigator;