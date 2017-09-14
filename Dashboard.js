import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

import Notes from './Notes';

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
    makeBackground(btn) {
        var obj = {
          flexDirection: 'row',
          alignSelf: 'stretch',
          justifyContent: 'center',
          flex: 1
        };
    
        if (btn === 0) {
          obj.backgroundColor = '#48BBEC';
        } else if (btn === 1) {
          obj.backgroundColor = '#E77AAE';
        } else {
          obj.backgroundColor = '#758BF4';
        }
    
        return obj;
      }

      goToProfile() {
        this.props.navigator.push({
            title: 'Notes',
            component: Notes
        })
      }

      goToRepos() {

      }

      goToNotes() {
        this.props.navigator.push({
            title: 'Notes',
            component: Notes
        })
      }

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