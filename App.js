import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';

import Main from './Main';

export default class App extends React.Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: 'github demo'
        }}      
        style={styles.container}
      />
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});
