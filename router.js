import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Intro from './Intro.js';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Purchase from './Purchase';
import Step1 from './Step1';
import Balance from './Balance';
import Strength from './Strength';
import Mobility from './Mobility';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';
import Step10 from './Step10';
import Summary from './Summary';



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
        headerTitle: 'Subject User Input',
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
  Step1: {
    screen: Step1,
    navigationOptions: {
      header: null
    },
  },
  Step2: {
    screen: Step2,
    navigationOptions: {
      header: null
    },
  },
  Step3: {
    screen: Step3,
    navigationOptions: {
      header: null
    },
  },
  Step4: {
    screen: Step4,
    navigationOptions: {
      header: null
    },
  },
  Step5: {
    screen: Step5,
    navigationOptions: {
      header: null
    },
  },
  Step6: {
    screen: Step6,
    navigationOptions: {
      header: null
    },
  },
  Step7: {
    screen: Step7,
    navigationOptions: {
      header: null
    },
  },
  Step8: {
    screen: Step8,
    navigationOptions: {
      header: null
    },
  },
  Step9: {
    screen: Step9,
    navigationOptions: {
      header: null
    },
  },
  Step10: {
    screen: Step10,
    navigationOptions: {
      header: null
    },
  },
  Summary: {
    screen: Summary,
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