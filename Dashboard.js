import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
    container: {
      marginTop: 65,
      flex: 1
    },
    image: {
      height: 350,
    },
    buttonText: {
      fontSize: 24,
      color: 'gray',
      alignSelf: 'center'
    }
  });

export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={{uri: ''}}
                    style={styles.image}
                />

                <TouchableHighlight
                    style={this.makeBackground(0)}
                    onPress={this.goToProfile.bind(this)}
                    >
                    <Text style={styles.buttonText}>View Profile</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={this.makeBackground(1)}
                    onPress={this.goToRepos.bind(this)}
                    >
                    <Text style={styles.buttonText}>View Repos</Text>
                </TouchableHighlight>
            </View>
        )
    }
}