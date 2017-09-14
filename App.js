import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

import Dashboard from './Dashboard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'xinzhang'
    }
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    })
  }

  handleSubmit(event) {
    // reroute to the next route, passing github info
    this.props.navigator.push({
      component: Dashboard,
      title: 'Select an Option',
      passProps: { userInfo: this.state.username }
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a github user</Text>
        <TextInput 
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor='white'
            onPress={this.handleSubmit.bind(this)}>
              <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
        <Text>{this.state.username}</Text>
        <Text>this is the dislay text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    marginTop:65,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize:35,
    textAlign:'center',
    color:'#fff'
  },
  searchInput: {
    height: 50,
    padding:4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
},
button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
},

});
